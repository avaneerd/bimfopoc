import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const allArticlesQuery = gql(`
      query articles {
        allArticles {
          id
          name
        }
      }
    `);

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css']
})
export class ViewArticlesComponent implements OnInit {
  selectedId: number;
  articles: Observable<Article[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.articles = this.apollo
      .watchQuery<any>({ query: allArticlesQuery })
      .valueChanges.map(({ data }) => data.allArticles);
  }
}
