import { Dimensions } from 'react-native'

const params = {
    blocksSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // proporção do header
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blocksSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(borderHeight / this.blocksSize)
    }
}

export default params