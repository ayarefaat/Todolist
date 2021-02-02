import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Task } from './../models/task';
import{TextService} from '../services/text.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[];
  // textservice:TextService=new TextService()
  flag:number=0;
  constructor(private textservice:TextService) { }

  ngOnInit(): void {
  }
  
  addTask(title:string){
    let task:Task=new Task();
    let result = this.tasks.find(task=>{
      return task.Title===title;
    })
    if(result ||this.textservice.isEmptyText(title)){
      alert("please enter a unique title")
    }
    else{
      task.Title=title;
      this.tasks.push(task)
    }
  }
  getPendingTasksCount(){
    return this.tasks.filter(x=>x.Done==false).length
  }
  changeStatus(item:Task){ //bta5od mni item el bd5lo w 3ayzaha t3kes el status bt3to lma ados 3la checkbox
    item.Done=!item.Done;
  }
  delete(index:number){
    this.tasks.splice(index,1)
  }
  
  
}
