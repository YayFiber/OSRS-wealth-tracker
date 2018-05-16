import { connect } from 'react-redux'
import { addUserItem } from '../actions/index'
import UserItems from '../components/UserItems/UserItems'

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(UserItems)