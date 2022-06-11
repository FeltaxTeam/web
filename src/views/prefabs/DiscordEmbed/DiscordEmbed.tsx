import React from 'react';
import './DiscordEmbed.scss';

interface IProps {
  title?: string;
  description?: string;
  color?: string;
  thumbnail?: string;
  image?: string;
  fields?: { name: string, value: string, inline?: boolean }[];
  footer?: { text: string, icon_url?: string };
}

interface IState {
  title?: string;
  description?: string;
  color?: string;
  thumbnail?: string;
  image?: string;
  fields?: { name: string, value: string, inline?: boolean }[];
  footer?: { text: string, icon_url?: string };
}

export default class DiscordEmbed extends React.Component<IProps, IState> {
  render() {
    return (
      <div className='discord-embed'>
        <article>
          <div>
            {
              this.state?.title !== null ?
                <div className='embed-title'>{this.state?.title}Title</div>
                : <></>
            }
            {
              this.state?.description !== null ?
                <div className='embed-description'>{this.state?.description}
                  Estas son las Reglas del Servidor, te pedimos que las cumplas para pasar un buen rato y evitar inconvenientes.

                  1. Prohibido hacer Spam/Flood/Raids.
                  Por el bien del servidor y la comodidad de los usuarios.

                  2. No discriminar/insultar a nadie.
                  No importa la raza, país, sexo, género, orientación sexual, religión, etc. Debe haber respeto en el servidor.

                  3. No NSFW/+18/Gore.
                  El contenido para adultos, sangrientos o violentos, está estrictamente prohibido.

                  4. No mencionar sin ningún motivo.
                  No queremos molestar a nuestros usuarios con menciones sin motivo alguno.

                  5. No Mencionar e Insistir por Ayuda en Programación.
                  La gente no siempre podrá ayudarlos, lo harán voluntariamente.

                  6. No abrir Tickets por sin motivo o por Ayuda en Programación.
                  Los Tickets son para informar o resolver dudas acerca del servidor.

                  7. Respetar la temática de los canales.
                  Cada canal tiene su propósito, por algo están separados.

                  8. Al ser ayudado, no enviar códigos por texto.
                  Los códigos deben ser enviados por Foto, queremos evitar el Copiar y Pegar.

                  Asimismo, cumple con los Términos de Servicio de Discord y las Normas de la Comunidad que son Reglas Generales de Discord.
                </div>
                : <></>
            }
            {
              this.state?.color !== null ?
                <div className='embed-color' style={{ backgroundColor: this.state?.color }}></div>
                : <></>
            }
            {
              this.state?.thumbnail !== null ?
                <div className='embed-thumbnail'><img src={this.state?.thumbnail} /></div>
                : <></>
            }
          </div>
        </article>
        <div className="components">
        </div>
      </div>
    );
  }
}