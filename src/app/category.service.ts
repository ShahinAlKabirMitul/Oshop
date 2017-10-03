import { query } from '@angular/core/src/animation/dsl';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db : AngularFireDatabase) { }
  categories$;
  
  getCategories(){
    return this.db.list('/categories',{
      query:{
        orderByChild:'name'
      }
    });
  }
}