import '../style/navigation.css'

const NavItems = ({aboutSection, projectsSection, contactSection, navItems}) => {
    
    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior:'smooth'
        })
    }
    const shrinkNav = (ref) => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.fontSize = "30px";
          } else {
            document.getElementById("header").style.fontSize = "90px";
          }
    }

    window.onscroll = function() {shrinkNav(navItems)};
    
    return (
            <div id='nav-items-container' className='nav-container' ref={navItems}>
                    <div class='nav-item' onClick={() => scrollDown(aboutSection)} >About Me </div>
                    <div class='nav-item' onClick={() => scrollDown(projectsSection)}>Projects</div>
                    <div class='nav-item' onClick={() => scrollDown(contactSection)}>Contact</div>
            </div>
            )
    }

export default NavItems