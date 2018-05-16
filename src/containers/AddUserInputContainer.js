import { connect } from 'react-redux'
import { addUserItem } from '../actions/index'
import UserInput from '../components/UserInput/UserInput'

const mapStateToProps = (state) => ({
  items: state.itemsReducer
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit : (itemName, buyPrice) => dispatch(addUserItem(itemName, buyPrice))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)