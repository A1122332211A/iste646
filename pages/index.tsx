import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from 'react';


const inter = Inter({ subsets: ['latin'] })

export default Home;

function Home(){
    const [menu, setMenu] = useState(<ul></ul>);
    const [section,setSection] = useState(<h4>Recent Updates</h4>);
    const [submenu,setSubmenu] = useState(<ul className='navigation'></ul>);
    const [content,setContent] = useState(<section></section>);

    return (
    <div>
      <header>
        <nav onClick={()=>setMenu(
            <ul className='main-menu-container'>
              <li className='main-menu' onClick={()=>setSection(
                  <h4 className='submenu-title' onClick={()=>setSubmenu(
                      <ul className='submenu-container'>
                          <h4 onClick={()=>setSubmenu(<p></p>)}>General Information</h4>
                          <li className='submenu' onClick={()=>setContent(
                              <table>
                                  <th>Region1</th>
                                  <td>timeline</td>
                                  <td>registration information</td>
                                  <td>regular season forms
                                      <button>Student downloads</button>
                                      <button>Coach downloads</button>
                                  </td>
                                  <p>&nbsp;</p>
                                  <th>Region 2</th>
                                  <td>timeline</td>
                                  <td>registration information</td>
                                  <td>regular season forms</td>
                                  <p>&nbsp;</p>
                                  <th>Region3</th>
                                  <td>timeline</td>
                                  <td>registration information</td>
                                  <td>regular season forms</td>
                                  <p>&nbsp;</p>
                                  <th>State</th>
                                  <td>playoff</td>
                                  <td>all-stars</td>
                              </table>)}>Registration</li>
                          <li className='submenu' onClick={()=>setContent(<article>
                              <p>Title</p>
                              <p>Content</p>
                          </article>)}>Logistics</li>
                          <li className='submenu'>Testimonial</li>
                      </ul>
                      )}>General Information</h4>
              )}>General Information</li>
              <li className='main-menu' onClick={()=>setSection(
                  <h4 className='submenu-title' onClick={()=>setSubmenu(
                      <ul className='submenu-container'>
                          <h4 onClick={()=>setSubmenu(<p></p>)}>Program Information</h4>
                          <li className='submenu' onClick={()=>setContent(
                              <ul>
                                  <li onClick={()=>setContent(
                                      <table>
                                          <th>time and region</th>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <p>&nbsp;</p>
                                          <th>time and region</th>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <p>&nbsp;</p>
                                      </table>
                                  )}>2022-2023</li>
                                  <li onClick={()=>setContent(
                                      <table>
                                          <th>time and region</th>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <p>&nbsp;</p>
                                          <th>time and region</th>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <p>&nbsp;</p>
                                      </table>
                                  )}>2021-2022</li>
                                  <li onClick={()=>setContent(
                                      <table>
                                          <th>time and region</th>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <p>&nbsp;</p>
                                          <th>time and region</th>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <td>star --- score</td>
                                          <p>&nbsp;</p>
                                      </table>
                                  )}>2020-2021</li>
                              </ul>
                          )}>All-Stars</li>
                          <li className='submenu' onClick={()=>setContent(
                              <table>
                                  <th>State Tournament</th>
                                  <td></td>
                              </table>
                          )}>State Tournament</li>
                      </ul>
                      )}>Program Information</h4>
              )}>Program Information</li>
              <li className='main-menu' onClick={()=>setSection(
                  <h4 className='submenu-title' onClick={()=>setSubmenu(
                      <ul className='submenu-container'>
                          <h4 onClick={()=>setSubmenu(<p></p>)}>League Information</h4>
                          <li className='submenu' onClick={()=>setContent(
                              <table>
                                  <th>Region1</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region2</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region3</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                              </table>
                          )}>2022-23</li>
                          <li className='submenu'  onClick={()=>setContent(
                              <table>
                                  <th>Region1</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region2</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region3</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                              </table>
                          )}>2021-22</li>
                          <li className='submenu'  onClick={()=>setContent(
                              <table>
                                  <th>Region1</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region2</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region3</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                              </table>
                          )}>2020-21</li>
                          <li className='submenu' onClick={()=>setContent(
                              <table>
                                  <th>Region1</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region2</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                                  <th>Region3</th>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <td>school --- score</td>
                                  <p>&nbsp;</p>
                              </table>
                          )}>2019-20</li>
                      </ul>
                      )}>League Information</h4>
              )}>League Information</li>
            </ul>)}>
            {menu}
        </nav>
          <Image src='/hamburger-menu@1x.png' alt='menu' className='hamburger-icon' width={50} height={50} onClick={()=>setMenu(<ul><Image src='/hamburger-menu@1x.png' alt='menu' className='hamburger-icon' width={50} height={50}/></ul>)}/>
          <Image src='/logo.png' alt='menu' className='logo' width={96} height={96} onClick={()=>setSection(<h4>Recent Updates</h4>)}/>
        {section}
        {submenu}
      </header>
      <main onClick={()=>setMenu(<ul><Image src='/hamburger-menu@1x.png' className='hamburger-icon' alt='menu' width={50} height={50}/></ul>)}>
          {content}
      </main>
      <footer>
        <h4>Contacts</h4>
        <p>email:nymasterminds@gmail.com</p>
        <p>phone number: 585-473-0864</p>
      </footer>
    </div>
  )
}
