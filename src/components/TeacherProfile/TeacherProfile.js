import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeacherDetail } from '../../redux/AsyncAction/TeacherAction';
import Loader from '../Loader/Loader';
import './TeacherProfile.css';
const TeacherProfile = () => {
    const dispatch = useDispatch();
    const teacher = useSelector((state) => state.teacher.teacherDetail);

    console.log(teacher);
    const { department, id } = useParams()
    useEffect(() => {
        dispatch(getTeacherDetail(department, id))
    }, [dispatch]);

    return (
        <div>
            {teacher ? (
                teacher.map((item,index)=>(
                <body id="myCopyright">
                    <div className="bg"></div>
                    <div class="profile" align="center">
                        <img class="pf" src={item.profilePicture} />
                        <div class="contain">
                            <div class="i_space"></div>
                            <h2 class="title">{item.name}</h2>
                            <p class="summary"><tag></tag>{item.position}</p>
                        </div>

                        <div style={{ marginTop: 30 }} class="contain">
                            <h4 class="i_space">Education</h4>
                            <h2 class="title">Bsc in {item.bachelorDegree}</h2>
                            <h2 class="title">Msc in {item.mastersDegree}</h2>
                            <h2 class="title">Phd in {item.phd}</h2>
                        </div>

                        <div class="contain_2">
                            <div class="row">

                                <div class="column">
                                    <div class="i_contain">
                                        <div class="i_cards">
                                            <img class="icon_logo" title="Facebook" alt="Facebook" src="https://icollector.000webhostapp.com/widget/profile/images/logo/facebook.png" />
                                            <h2 class="i_title">Facebook</h2>

                                            <p class="i_summary">https://facebook.com/iexperimen</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="i_contain">
                                        <div class="i_cards">
                                            <img class="icon_logo" title="Twitter" alt="Twitter" src="https://icollector.000webhostapp.com/widget/profile/images/logo/twitter.png" />
                                            <h2 class="i_title">Twitter</h2>

                                            <p class="i_summary">https://twitter.com/iexperimen</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="column">
                                    <div class="i_contain" >
                                        <div class="i_cards">
                                            <img class="icon_logo" title="Instagram" alt="Instagram" src="https://icollector.000webhostapp.com/widget/profile/images/logo/instagram.jpeg" />
                                            <h2 class="i_title">Instagram</h2>

                                            <p class="i_summary">https://instagram.com/official.iexperiment</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="i_contain" >
                                        <div class="i_cards">
                                            <img class="icon_logo" title="Github" alt="Github" src="https://icollector.000webhostapp.com/widget/profile/images/logo/github.png" />
                                            <h2 class="i_title">Github</h2>

                                            <p class="i_summary">https://github.com/iexperimen</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="i_contain" >
                                        <div class="i_cards">
                                            <img class="icon_logo" title="Codepen" alt="Codepen" src="https://icollector.000webhostapp.com/widget/profile/images/logo/codepen.webp" />
                                            <h2 class="i_title">Codepen</h2>

                                            <p class="i_summary">https://codepen.io/iexperimen</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="i_contain" >
                                        <div class="i_cards">
                                            <img class="icon_logo" title="iCollector" alt="iCollector" src="https://icollector.000webhostapp.com/widget/profile/images/logo/browser.png" />
                                            <h2 class="i_title">iCollector</h2>
                                            <p class="i_summary">https://bit.ly/iExperiment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer>

                        </footer>
                    </div>
                </body>
                ))

                ) : <Loader />
            }

        </div>
    );
};

export default TeacherProfile;