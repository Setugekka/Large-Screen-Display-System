import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})
export class OrgchartComponent implements OnInit {
   private datasource=[{"level":1,"data":[{'name': 'Pang Pang',
      'title': 'senior engineer',
      'className': 'rd-dept'},{'name': 'Su Miao',
      'title': 'department manager',
      'className': 'middle-level'}]},{"level":2,"data":[{'name': 'Dan Dan', 'title': 'engineer', 'className': 'frontend1'},{'name': 'Li Xin',
      'title': 'senior engineer',
      'className': 'product-dept'}]},{"level":3,"data":[{'name': 'Xiang Xiang',
      'title': 'UE engineer',
      'className': 'frontend1'},{'name': 'Xiang Xiang',
      'title': 'UE engineer',
      'className': 'frontend1'},{'name': 'Xiang Xiang',
      'title': 'UE engineer',
      'className': 'frontend1'}]}]
  constructor() { }

  ngOnInit() {
     console.log(this.smallestCommons([2,4,3]))
  }
  buildHierarchy(){

  }
  smallestCommons(arr) {
    arr.sort((a,b)=>{
      return a>b;
    });
    let result=1;
    for(let j=arr[arr.length-1];j<Number.MAX_VALUE;j++){
      let flag=true;
      for(let k=arr[0];k<=arr[arr.length-1];k++){
        if(j%k===0){
          result=j;
        }else{
          flag=false;
          break;
        }
      }
      if(flag){
        result=j;
        break;
      }
    }
    return result;
  }

}


