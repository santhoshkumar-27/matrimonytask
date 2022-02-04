import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  userList : any;
  data: any;
  match!: number;
  yetToView!: number;
  viewed!: number;
  imgCount = 30;
  activeTab !: string;
  footerHide!: boolean;
  loading !: boolean;
  paddingHide !: boolean;
  constructor(
    private router: Router,
    private http: HttpClient
  ) 
  { }

  ngOnInit(): void {
    this.getDataList();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
   const Scroll = event.target.scrollingElement.scrollTop;
   if(Scroll > 78) {
     this.paddingHide = true;
   }else {
     this.paddingHide = false;
   }
   if(Scroll > 200) {
     this.footerHide = true;
   } else {
     this.footerHide = false;
   }

  }

  goToPrime() {
    this.router.navigate(['/prime']);
  }
  getDataList () {
    this.http.get<any>('assets/matchlist.json').pipe(
      debounceTime(2000)
    ).subscribe( (sub : any) => {
      setTimeout(() => {}, 800);
      this.data = sub;
      this.match = this.data.match;
      this.yetToView = this.data.yetToView;
      this.viewed = this.data.viewed;
      this.allMatchList('allmatches');
    } )
  }

  allMatchList(value: string) {
    this.loading = true;
    this.userList = this.data.data.allMatchList;
    setTimeout(()=> {
      this.loading = false;
    },500);
    this.activeTab = value;
  }
  newMatches(value: string) {
    this.loading = true;
    this.userList = this.data.data.mutualMatches;
    setTimeout(()=> {
      this.loading = false;
    },500);
    this.activeTab = value;
  }
  premiumMatches(value: string) {
    this.loading = true;
    this.userList = this.data.data.newMatches;
    setTimeout(()=> {
      this.loading = false;
    },500);
    this.activeTab = value;
  }
  mutualMatches(value: string) {
    this.loading = true;
    this.userList = this.data.data.premiumMatches;
    setTimeout(()=> {
      this.loading = false;
    },500);
    this.activeTab = value;
  }
}
