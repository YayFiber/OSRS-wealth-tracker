import { connect } from 'react-redux'
import { addUserItem } from '../actions/index'
import ItemPreview from '../components/ItemPreview/ItemPreview'

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemName, buyPrice) => dispatch(addUserItem(itemName, buyPrice))
})

export default connect(null, mapDispatchToProps)(ItemPreview)