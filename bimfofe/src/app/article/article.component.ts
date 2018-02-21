import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const articleQuery = gql(`
      query articles($id: Int!) {
        article(id: $id) {
          id
          name
          content
        }
      }
    `);

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  article: Observable<Article>;

  @Input() articleId: number;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getArticleInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getArticleInfo();
  }

  private getArticleInfo() {
    if (this.articleId) {
        this.article = this.apollo
          .watchQuery<any>({ query: articleQuery, variables: { id: this.articleId } })
          .valueChanges.map(({ data }) => data.article);
    }
  }
}
