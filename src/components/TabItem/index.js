import './index.css'

const TabItem = props => {
  const {tabDetails, uniqueTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const clickButton = () => {
    uniqueTab(tabId)
  }

  const classItem = isActive ? 'active' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${classItem}`}
        onClick={clickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
