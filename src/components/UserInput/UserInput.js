import React, { Component } from 'react'; 
import itemsList from '../../Data/ObjectDatalist'
import ItemPreviewContainer from '../../containers/ItemPreviewContainer'
import Trie from 'autocomplete'

const itemsSuggestions = new Trie();
itemsSuggestions.populate(itemsList.map(item => item.name))

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      previewedItem: null
    }
  }

  getItemData = async (name) => {
    const fetchedItem = itemsList.find(listItem => listItem.name.toUpperCase() === name.toUpperCase())
    const itemID = fetchedItem.id
    const response = await fetch(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemID}`)
    const parsedItem = await response.json()

    this.setState({ previewedItem: parsedItem.item })
  }

  render() {
    itemsSuggestions.suggest(this.state.name)

    const checkForSuggestions = () => {
      if (itemsSuggestions.suggestions.length > 0) { 
        return itemsSuggestions.suggestions.map(item => <option>{item}</option>).slice(0, 10)
      }
    }
    
    return(
      <section>
        <h3> Search for an item! </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.getItemData(this.state.name)
          }}
        >
          <input 
            list="items"
            value={this.state.text}
            placeholder='Search for an item'
            onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
          />
          <datalist id="items">
            {checkForSuggestions()}
          </datalist>
          <button type='submit'> Search </button>
        </form>
        {this.state.previewedItem && <ItemPreviewContainer item={this.state.previewedItem} />}
      </section>
    )
  }
}

export default UserInput