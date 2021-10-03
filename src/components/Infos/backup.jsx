import React from 'react';
import {
    IoStopwatchOutline,
    IoLocationOutline,
    IoSchoolOutline,
    IoEarthOutline,
    IoEarOutline,
    IoHeartOutline,
    IoMusicalNotesOutline,
    IoPawOutline,
    IoSunnyOutline,
  } from "react-icons/io5";

const backup = () => {
    return (
        <div className="infos">
      <ul>
        <li>
          <IoLocationOutline className="icon" />
          <p>
            Né à Annecy en 1990, j'habite à Lyon depuis maintenant plus de
            20ans.
          </p>
        </li>
        <li>
          <IoHeartOutline className="icon" />
          <p>
            Passionné de musique, d'informatique, de cinéma, de sport et d'art
            en général.
          </p>
        </li>
        <li>
          <IoSchoolOutline className="icon" />
          <p>
            Issu initialement d'un cursus commercial, je possède un BTS
            Management des Unités Commerciales.
          </p>
        </li>
        <li>
          <IoEarOutline className="icon" />
          <p>
            Toujours à l'écoute, je possède un excellent relationnel, le sens
            des responsabilités ainsi qu'une grande capacité d'adaptation.
          </p>
        </li>
        <li>
          <IoSunnyOutline className="icon" />
          <p>
            Rigoureux, curieux, créatif et autonome, j'ai un goût prononcé pour
            le travail bien fait (et beau visuellement).
          </p>
        </li>
        <li>
          <IoMusicalNotesOutline className="icon" />
          <p>
            J'ai créé un site de musique en autodidacte (cf. ilovethistrack.com)
            et partage des playlists en tous genres sur Spotify.
          </p>
        </li>
        <li>
          <IoEarthOutline className="icon" />
          <p>
            Particulièrement ouvert d'esprit, j'ai vécu 6 mois à Londres et ai
            eu la chance de visiter de nombreux pays (4 continents différents).
          </p>
        </li>
        <li>
          <IoStopwatchOutline className="icon" />
          <p>
            J'ai pratiqué de nombreux sports dans ma vie (foot, tennis,
            taekwendo..) et cours une à deux fois par semaine.
          </p>
        </li>
        <li>
          <IoPawOutline className="icon" />
          <p>
            Papa d'un petit Beagle croisé Jagd Terrier (beaucoup d'amour pour
            les animaux).
          </p>
        </li>
      </ul>
    </div>
    );
};

export default backup;