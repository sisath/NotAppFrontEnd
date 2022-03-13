import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  configUrl = "http://localhost:8080/api/v1/notes";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Note[]>(this.configUrl);
  }

  get(id: number) {
    return this.http.get<Note>(this.configUrl + '/' + id);
  }

  getId(note: Note) {
    return note.noteId;
  }

  add(note: Note) {
    return this.http.post<Note>(this.configUrl, note);
  }

  update(id: number, title: string, body: string) {
    let note = new Note();
    note.noteId = id;
    note.title = title;
    note.body = body;

    return this.http.put<Note>(this.configUrl + '/' + id, note);
  }

  delete(id: number) {
    return this.http.delete<Note>(this.configUrl + '/' + id);
  }
}
