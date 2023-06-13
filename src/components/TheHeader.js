import { Component }  from '../core/kato'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render();
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a
        href = "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
        class = "logo">
        <span>KATO MOVIE</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <li>
                <a
                  class="${isActive ? 'active' : ''}"
                  href = "${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join()}
        </ul>
      </nav>
      <a href='#/about' class="user">
        <img alt = "User">
      </a>
    `
  }
}