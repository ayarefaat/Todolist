import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TextService{
    isEmptyText(text:string){
        if(text==null || text.length==0){
          return true;
        }
      }
}