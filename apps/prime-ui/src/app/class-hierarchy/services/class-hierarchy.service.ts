import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import { ClassificationLevel } from '../interfaces/classification-level.interface';
import { ClassificationScheme } from '../interfaces/classsification-scheme.interface';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ClassHierarchyService {
  httpClient = inject(HttpClient);

  // CLASSIFICATION SCHEMES
  // ============================================================================
  getClassificationSchemes(): Observable<ClassificationScheme[]> {
    return this.httpClient.get<ClassificationScheme[]>(`${BASE_URL}/classification-schemes`);
  }

  getClassificationSchemesPromise(): Promise<ClassificationScheme[]> {
    return firstValueFrom(this.getClassificationSchemes());
  }

  getClassificationSchemeById(id: string): Observable<ClassificationScheme | undefined> {
    return this.httpClient
      .get<ClassificationScheme>(`${BASE_URL}/classification-schemes/${id}`)
      .pipe(catchError(error => of(undefined)));
  }

  getClassificationSchemeByCode(query: string): Observable<ClassificationScheme[]> {
    return this.httpClient.get<ClassificationScheme[]>(`${BASE_URL}/classification-schemes/?scheme${query}`);
  }

  addClassificationScheme(classificationScheme: ClassificationScheme): Observable<ClassificationScheme> {
    return this.httpClient.post<ClassificationScheme>(`${BASE_URL}/classification-schemes/`, classificationScheme);
  }

  updateClassificationScheme(classificationScheme: ClassificationScheme): Observable<ClassificationScheme> {
    if (!classificationScheme.id) throw Error('Classification Scheme Id is required');

    return this.httpClient.patch<ClassificationScheme>(
      `${BASE_URL}/classification-schemes/${classificationScheme.id}`,
      classificationScheme,
    );
  }

  deleteClassificationScheme(id: string): Observable<boolean> {
    return this.httpClient.delete(`${BASE_URL}/classification-schemes/${id}`).pipe(
      map(resp => true),
      catchError(err => of(false)),
    );
  }

  // CLASSIFICATION LEVELS
  // ============================================================================
  getClassificationLevels(): Observable<ClassificationLevel[]> {
    return this.httpClient.get<ClassificationLevel[]>(`${BASE_URL}/classification-levels`);
  }

  getClassificationLevelsPromise(): Promise<ClassificationLevel[]> {
    return firstValueFrom(this.getClassificationLevels());
  }

  getClassificationLevelById(id: string): Observable<ClassificationLevel | undefined> {
    return this.httpClient
      .get<ClassificationLevel>(`${BASE_URL}/classification-levels/${id}`)
      .pipe(catchError(error => of(undefined)));
  }

  getClassificationLevelByCode(query: string): Observable<ClassificationLevel[]> {
    return this.httpClient.get<ClassificationLevel[]>(`${BASE_URL}/classification-levels/?scheme${query}`);
  }

  addClassificationLevel(classificationLevel: ClassificationLevel): Observable<ClassificationLevel> {
    return this.httpClient.post<ClassificationLevel>(`${BASE_URL}/classification-levels/`, classificationLevel);
  }

  updateClassificationLevel(classificationLevel: ClassificationLevel): Observable<ClassificationLevel> {
    if (!classificationLevel.id) throw Error('Classification Level Id is required');

    return this.httpClient.patch<ClassificationLevel>(
      `${BASE_URL}/classification-levels/${classificationLevel.id}`,
      classificationLevel,
    );
  }

  deleteClassificationLevel(id: string): Observable<boolean> {
    return this.httpClient.delete(`${BASE_URL}/classification-levels/${id}`).pipe(
      map(resp => true),
      catchError(err => of(false)),
    );
  }
}
