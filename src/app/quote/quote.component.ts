import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes'; 

  quotes = [
    new Quote(1, 'Life is way too short for bad vibes', 'Anonymous Rebecca Sila',),
    new Quote(2, 'There is a voice that does not use words,Listen', 'Rumi Rebecca Sila', ),
    new Quote(3, 'A day without a laugh is a wasted day', 'Charles Chaplin Janet Isak',),
    new Quote(4, 'If it does not challenge you,it does not change you', 'Adewaje Frank Robert',),
    new Quote(5, 'Friends are like rainbows always there to cheer you up after the storm', 'Charles Chaplin Jade',),
 ]

 completeQuote(isComplete,index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}

 toogleDetails(index) {
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }
  constructor() { }

  ngOnInit() {
  }

}
