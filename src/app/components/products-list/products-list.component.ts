import {Component, OnInit} from '@angular/core';

interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(): void {
    this.products = [
      {
        title: 'Ordinateur portable',
        description: 'Ordinateur portable haut de gamme avec processeur Intel Core i7 de dernière génération, écran IPS Full HD de 15,6 pouces, 16 Go de RAM et un disque SSD rapide de 512 Go. Parfait pour le travail et le jeu.',
        image: 'https://boulanger.scene7.com/is/image/Boulanger/0194252056073_h_f_l_0',
        price: 1099,
      },
      {
        title: 'Smartphone',
        description: 'Smartphone dernier cri avec un écran OLED de 6,5 pouces, triple caméra de 48 MP, processeur Snapdragon 888, 8 Go de RAM et 256 Go de stockage interne. Profitez de la photographie de pointe et de la vitesse incroyable.',
        image: 'https://m.media-amazon.com/images/I/81la+dAkb7L.jpg',
        price: 699,
      },
      {
        title: 'Montre connectée',
        description: 'Montre connectée élégante avec un boîtier en acier inoxydable, un écran tactile AMOLED de 1,4 pouces, un suivi de la santé complet (fréquence cardiaque, sommeil, étapes) et des notifications intelligentes pour rester connecté en permanence.',
        image: 'https://m.media-amazon.com/images/I/71NfrTsHUEL.jpg',
        price: 149
      },
      {
        title: 'Enceinte Bluetooth',
        description: 'Enceinte Bluetooth portable avec un son stéréo à 360 degrés, une batterie longue durée de 20 heures et une étanchéité IPX7. Parfaite pour les fêtes en plein air et les aventures en plein air.',
        image: 'https://media.carrefour.fr/medias/8e1a1091273132c6a91d53d03c1d01ee/p_540x540/6925281975301-photosite-20201108-170452-0.jpg',
        price: 99
      },
      {
        title: 'Vélo électrique',
        description: 'Vélo électrique léger en aluminium avec moteur puissant de 500 watts, autonomie de 60 kilomètres avec une seule charge et une suspension confortable. Parfait pour vos trajets quotidiens et vos balades en plein air.',
        image: 'https://media.alltricks.com/large/19470706036481cc3c777.66463080.jpg',
        price: 2099
      },
    ];
  }
}
