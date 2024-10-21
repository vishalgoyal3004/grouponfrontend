import { forwardRef } from "react"
import { FixedSizeList } from "react-window"

const VirtualizedList = forwardRef(function VirtualizedList(props, ref) {
  const { children, ...other } = props
  const itemCount = Array.isArray(children) ? children.length : 0
  return (
    <div ref={ref} {...other}>
      <FixedSizeList
        height={250}
        width="100%"
        itemSize={30}
        itemCount={itemCount}
      >
        {({ index, style }) => <div style={style}> {children[index]} </div>}
      </FixedSizeList>{" "}
    </div>
  )
})
export default VirtualizedList
