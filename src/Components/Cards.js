import React, {Component} from 'react';
import Onecard from './Onecard';



class Cards extends Component {
    constructor(props) {
        super(props);
        this.moveRestUp = this.moveRestUp.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.resetTravel = this.resetTravel.bind(this);
        this.beginRemoveCard = this.beginRemoveCard.bind(this);
        this.state = {
            cards: [
                {
                    name: 'Card 1',
                    presentedTime: '10 minutes ago',
                    value: 'Some Value 1',
                    label: 'Some Label 1',
                    id: '1'
                },
                {
                    name: 'Card 2',
                    presentedTime: '11 minutes ago',
                    value: 'Some Value 2',
                    label: 'Some Label 2',
                    id: '2'
                },
                {
                    name: 'Card 3',
                    presentedTime: '12 minutes ago',
                    value: 'Some Value 3',
                    label: 'Some Label 3',
                    id: '3'
                },
                {
                    name: 'Card 4',
                    presentedTime: '13 minutes ago',
                    value: 'Some Value 4',
                    label: 'Some Label 4',
                    id: '4'
                },
                {
                    name: 'Card 5',
                    presentedTime: '14 minutes ago',
                    value: 'Some Value 5',
                    label: 'Some Label 5',
                    id: '5'
                },
                {
                    name: 'Card 6',
                    presentedTime: '15 minutes ago',
                    value: 'Some Value 6',
                    label: 'Some Label 6',
                    id: '6'
                },

            ]
        }
    }

        removeCard(card) {
            let index = this.state.cards.indexOf(card);

            if (index > -1) {
                return [...this.state.cards.slice(0, index), ...this.state.cards.slice(index+1)];
            }

        }

        beginRemoveCard(card){
            let newCards = [...this.state.cards];
            newCards[newCards.indexOf(card)].removing = true;
            this.setState({cards: newCards});
        }
        moveRestUp(card, delta){
            let initialCardIndex = this.state.cards.indexOf(card);
            let newCards = [...this.state.cards];
            newCards.forEach((currCard, i)=>{
                if (i>initialCardIndex){
                    currCard.travelTo = delta
                }
            });

            this.setState({cards: newCards});
        }

        resetTravel(){
            let newCards = this.removeCard(this.state.cards.find(card=>card.removing));

            if (newCards) {
                newCards.forEach(card=>delete card.travelTo);
                this.setState({cards: newCards});
            }
    }
    render() {
        return (
            <div className='cards-list'>
                {this.state.cards.map((card,i)=>{
                    return <Onecard
                        key={card.id}
                        card = {card}
                        moveRestUp={this.mpveRestUp}
                        resetTravel={i === this.state.cards.length-1 ? this.resetTravel : null}
                        // removeCard={this.removeCard}
                        beginRemoveCard={this.beginRemoveCard}/>
                })}
            </div>
        )
    }
}
export default Cards;