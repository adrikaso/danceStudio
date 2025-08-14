import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit {
  words = ['Urbano', 'Jazz dance', 'Contemporáneo', 'K-pop', 'Hip hop', 'Ballet', 'Reggaetón'];
  currentText = '';
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 130; // milisegundos entre letras

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.currentText = currentWord.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.currentText = currentWord.substring(0, this.charIndex);
    }

    let delay = this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      delay = 1500; // pausa cuando termina de escribir
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      delay = 500; // pausa antes de comenzar a escribir la siguiente
    }

    setTimeout(() => this.typeEffect(), delay);
  }
}