import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MensagemService} from "./shared/services/mensagem.service";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Verifica se é um erro do servidor
        if (error.status === 0) {
          this.mensagemService.MensagemErro('Erro de conexão com o servidor.');
        } else {
          // Exibe a mensagem de erro
          const mensagemErro = error.error.message || 'Erro inesperado.';
          this.mensagemService.MensagemErro(mensagemErro);
        }
        return throwError(error);
      })
    );
  }
}
