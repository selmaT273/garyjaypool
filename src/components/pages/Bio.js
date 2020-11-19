import React from 'react'
import './Bio.css';

export default function Bio() {
    return (
        <>
            <main>
                <div className="bio-container">
                   <div className="bio-pic-container">
                        <img className="bio-pic" alt="bio-pic" src={require("../../standinbiopic.jpg")} />
                        <div className ="bio-pic-text">
                            <div className="bio-quote">
                            Gary Jay Pool was born July 18, 1946 to a poor southwest Iowa farm family. His family consisted of his father Ben, who was a World War II veteran and a man of few words; his mother Helen an insatiable reader and conversationalist; and an older sister Gloria.
                            
                            Being raised on a dead-end dirt road very near the Missouri River, Gary spent countless hours hunting and fishing and became an avid outdoorsman. The author's father spent his life trying to raise his only son to survive being a soldier in a war, which he somehow knew was coming.

                            After high school, Gary enrolled in college but eventually decided he wanted to enlist in the U.S. Army with the intent of going to Vietnam.  He went to Ammunition Storage Disposal School. A tour of duty in Vietnam with the 3rd Ord Army Explosive Disposal Unit provided a wealth of factual antidotes for his first book, Xuc May (Never Happen)

                            While Xuc May is a non-fiction book about his personal experiences in bomb disposal, Gary continued writing during his retirement years, publishing fiction stories.  Gary spent his remaining years living in in Tabor, Iowa with his wife Jan.  He has one daughter, one grandson, and three step daughters.  His wife and daughters all work as a team to help publish and sell his books.
                            </div>
                        </div>
                   </div>  
                </div>
            </main>
        </>
    )
}