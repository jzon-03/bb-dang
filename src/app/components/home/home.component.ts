import { Component, HostListener } from '@angular/core';
interface Show {
  day: string;
  month: string;
  venue: string;
  city: string;
  time: string;
  ticketUrl: string;
  ticketLabel: string;
}

interface Member {
  name: string;
  role: string;
}

interface Genre {
  number: string;
  name: string;
  description: string;
}

interface Photo {
  url: string;
  alt: string;
  tall?: boolean;
  wide?: boolean;
}
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
menuOpen = false;

  isScrolled = false;

  currentYear = new Date().getFullYear();


  /*
   * Replace these with the band's
   * actual upcoming shows.
   */
  shows: Show[] = [
    {
      day: '25',
      month: 'JUL',
      venue: 'Dryer Road Park',
      city: 'Victor, NY',
      time: '5:30 PM',
      ticketUrl: '#',
      ticketLabel: 'Details'
    },
    {
      day: '08',
      month: 'AUG',
      venue: 'Water Street Music Hall',
      city: 'Rochester, NY',
      time: '8:00 PM',
      ticketUrl: '#',
      ticketLabel: 'Tickets'
    },
    {
      day: '22',
      month: 'AUG',
      venue: 'Rochester Beer Park',
      city: 'Rochester, NY',
      time: '7:00 PM',
      ticketUrl: '#',
      ticketLabel: 'Details'
    },
    {
      day: '12',
      month: 'SEP',
      venue: 'Private Event',
      city: 'Rochester, NY',
      time: '7:30 PM',
      ticketUrl: '#',
      ticketLabel: 'Details'
    }
  ];


  /*
   * Current lineup based on
   * BB DANG's current public profiles.
   */
  members: Member[] = [
    {
      name: 'Isabella Barbagallo',
      role: 'Vocals'
    },
    {
      name: 'Matt Edwards',
      role: 'Bass / Vocals'
    },
    {
      name: 'Reid Burton',
      role: 'Guitar / Vocals'
    },
    {
      name: 'Mike Valle',
      role: 'Drums'
    },
    {
      name: 'Abby Johnson',
      role: 'Keys / Vocals'
    },
    {
      name: 'Alex Sherwood',
      role: 'Guitar'
    }
  ];


  genres: Genre[] = [
    {
      number: '01',
      name: 'POP',
      description:
        'Current favorites and modern hits that everybody knows.'
    },
    {
      number: '02',
      name: 'ROCK',
      description:
        'Big guitars, big choruses and songs built for a crowd.'
    },
    {
      number: '03',
      name: 'CLASSIC ROCK',
      description:
        'Timeless songs from the artists that shaped generations.'
    },
    {
      number: '04',
      name: 'ALTERNATIVE',
      description:
        'Alternative favorites with plenty of attitude.'
    },
    {
      number: '05',
      name: 'COUNTRY',
      description:
        'A little country flavor to keep the dance floor moving.'
    },
    {
      number: '06',
      name: 'AND MORE',
      description:
        'A constantly evolving setlist built around the crowd.'
    }
  ];


  photos: Photo[] = [
    {
      url: 'images/bb-dang-01.jpg',
      alt: 'BB DANG performing live',
      tall: true
    },
    {
      url: 'images/bb-dang-02.jpg',
      alt: 'BB DANG on stage'
    },
    {
      url: 'images/bb-dang-03.jpg',
      alt: 'BB DANG musicians'
    },
    {
      url: 'images/bb-dang-04.jpg',
      alt: 'BB DANG performing'
    },
    {
      url: 'images/bb-dang-05.jpg',
      alt: 'BB DANG live concert',
      wide: true
    }
  ];


  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.isScrolled =
      window.scrollY > 40;

  }


  toggleMenu(): void {

    this.menuOpen =
      !this.menuOpen;

  }


  closeMenu(): void {

    this.menuOpen = false;

  }


  playVideo(): void {

    /*
     * Replace this with your YouTube
     * modal/player implementation.
     */
    console.log('Play BB DANG video');

  }
}
