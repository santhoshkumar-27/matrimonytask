import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  userList = [
    {
      imageUrl : '../../../assets/user1.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user2.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user3.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user4.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user5.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user6.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user7.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user8.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user9.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
    {
      imageUrl : '../../../assets/user10.jpeg',
      name: 'santhoshkumar',
      age: '27',
      height: "5'2",
      educate: 'BE',
      caste: 'chettier',
      state: 'Pondicherry',
      country: 'India'
    },
  ] 
    
  constructor(
    private router: Router
  ) 
  { }

  ngOnInit(): void {
  }

  goToPrime() {
    this.router.navigate(['/prime']);
  }
}
