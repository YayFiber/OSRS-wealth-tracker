import { connect } from 'react-redux'
import { addUserItem, removeUserItem } from '../actions/index'
import UserItems from '../components/UserItems/UserItems'

const mapStateToProps = (state) => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  removeItem : (item) => dispatch(removeUserItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserItems)