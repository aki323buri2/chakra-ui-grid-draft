import { Box, styled } from "@chakra-ui/react"
import clsx from "clsx"
import { useCallback, useRef, useState } from "react"
import { ArrowKeyStepper, AutoSizer, MultiGrid } from "react-virtualized"


const Root = props => (
  <Box 
    sx={{
      "& .cell" : {
        fontSize: 12, 
        whiteSpace: "nowrap", 
        borderTop: "1px solid", 
        borderRight: "1px solid", 
        borderColor: "gray.200", 
        paddingLeft: 2, 
        paddingTop: .2, 
        paddingRight: 2, 
        cursor: "pointer", 
        bg: "white", 
      }, 
      "& .bodyCell": {
        bg: "white", 
      }, 
      "& .headerCell": {
        bg: "gray.100", 
        fontWeight: 700, 
      },  
      "& .headerColumn": {
        textAlign: "right", 
      }, 
      "& .headerRow": {
        textAlign: "center", 
      }, 
      "& .selectedColumn": {
        bg: "yellow.50", 
      }, 
      "& .selectedRow": {     
        bg: "cyan.50", 
      },
      "& .selectedColumn.headerRow": {
        bg: "yellow.100", 
        color: "pink.400", 
      }, 
      "& .selectedRow.headerColumn": {
        bg: "cyan.100", 
        color: "green.500", 
      },  
      "& .selected": {
        bg: "blue.500", 
        color: "white", 
      }, 
    }}
    {...props}
  />
)

export default function Grid(props) {
  const gridRef = useRef(null)
  const [scrollToColumn, setScrollToColumn] = useState(1)
  const [scrollToRow, setScrollToRow] = useState(1)
  const columnCount = 1000
  const rowCount = 100000
  const columnWidth = useCallback(({ index }) => {
    return index === 0 ? 40 : 200
  }, [])
  const rowHeight = 20
  const fixedColumnCount = 1
  const fixedRowCount = 1
  const cellRenderer = useCallback(({
    columnIndex, 
    rowIndex, 
    style, 
    key, 
  }) => {
    const cellIs = {
      cell: true, 
      headerColumn: columnIndex === 0, 
      headerRow: rowIndex === 0, 
      bodyCell: columnIndex > 0 && rowIndex > 0, 
      headerCell: columnIndex === 0 || rowIndex === 0, 
      selectedColumn: columnIndex === scrollToColumn, 
      selectedRow: rowIndex === scrollToRow, 
      selected: columnIndex === scrollToColumn && rowIndex === scrollToRow, 
    }
    const cellText = (
      cellIs.headerColumn && cellIs.headerRow ? "" : (
      cellIs.bodyCell ? `${columnIndex} / ${rowIndex}` : (
      cellIs.headerColumn ? `${rowIndex}` : (
      cellIs.headerRow ? `${columnIndex}` : (
      null))))
    )
    return (
      <div 
        key={key}
        style={{...style}}
        className={clsx({...cellIs})}
        onClick={handleCellClick({ columnIndex, rowIndex })}
      >
        <p>{cellText}</p>
      </div>
    )
  }, [scrollToColumn, scrollToRow])
  const handleCellClick = useCallback(({
    columnIndex: scrollToColumn, 
    rowIndex: scrollToRow, 
  }) => {
    return () => {
      selectCell({
        scrollToColumn, 
        scrollToRow, 
      })
    }
  }, [])
  const handleScrollToChange = useCallback(({
    scrollToColumn, 
    scrollToRow, 
  }) => {
    selectCell({
      scrollToColumn, 
      scrollToRow, 
    })
  }, [])
  const selectCell = useCallback(({
    scrollToColumn, 
    scrollToRow, 
  }) => {
    setScrollToColumn(scrollToColumn)
    setScrollToRow(scrollToRow)
    gridRef.current?.recomputeGridSize()
  }, [])
  return (
    <Root h="100%" border="1px solid" borderColor="gray.500">
      <AutoSizer>
        {({ width, height }) => (
          <ArrowKeyStepper
            mode="cells"
            scrollToColumn={scrollToColumn}
            scrollToRow={scrollToRow}
            columnCount={columnCount}
            rowCount={rowCount}
            onScrollToChange={handleScrollToChange}
          >
            {({
              onSectionRendered, 
              scrollToColumn, 
              scrollToRow, 
            }) => (
              <MultiGrid 
                ref={gridRef}
                width={width}
                height={height}
                columnCount={columnCount}
                rowCount={rowCount}
                columnWidth={columnWidth}
                rowHeight={rowHeight}
                fixedColumnCount={fixedColumnCount}
                fixedRowCount={fixedRowCount}
                cellRenderer={cellRenderer}
                onSectionRendered={onSectionRendered}
                scrollToColumn={scrollToColumn}
                scrollToRow={scrollToRow}
              />
            )}
          </ArrowKeyStepper>
        )}
      </AutoSizer>
    </Root>
  )
}