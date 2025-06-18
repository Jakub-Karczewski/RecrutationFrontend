

const TabPanel = ({onChange}) => {
    return <div>
        <button onClick={() => {onChange(true)}}>
            Daily
        </button>
        <button onClick={() => {onChange(false)}}>
            Weekly
        </button>
    </div>
}
export default TabPanel;