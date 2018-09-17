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
    new Quote(1, 'Life is way too short for bad vibes'),
    new Quote(2, 'There is a voice that does not use words,Listen',),
    new Quote(3, 'A day without a laugh is a wasted day',),
    new Quote(4, 'If it does not challenge you,it does not change you',),
    new Quote(5, 'Friends are like rainbows always there to cheer you up after the storm'),
 ]
  constructor() { }

  ngOnInit() {
  }

}
