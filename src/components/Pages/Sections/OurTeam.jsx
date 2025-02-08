import React from 'react';
import person1 from '../../../assets/Images/person_1.jpg';
import person2 from '../../../assets/Images/person_2.jpg';
import person3 from '../../../assets/Images/person_3.jpg';
import person4 from '../../../assets/Images/person_4.jpg';

const staff = [
    {
        "id": 1,
        "name": "Lawson Arnold",
        "image": person1,
        "role": "CEO, Founder, Atty.",
        "bio": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.."
    },
    {
        "id": 2,
        "name": "Jeremy Walker",
        "image": person2,
        "role": "CEO, Founder, Atty.",
        "bio": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.."
    },
    {
        "id": 3,
        "name": "Patrik White",
        "image": person3,
        "role": "CEO, Founder, Atty.",
        "bio": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.."
    },
    {
        "id": 4,
        "name": "Kathryn Ryan",
        "image": person4,
        "role": "CEO, Founder, Atty.",
        "bio": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.."
    },
];

const OurTeam = () => {
  return (
    <>
     <div className='container mx-auto bg-gray-50 py-8'>
        <div className='text-center'>
            <h1 className='text-3xl font-semibold mb-4'>Our Team</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {staff.map((person) => (
                <div key={person.id} className='flex flex-col items-center space-y-4'>
                    <img src={person.image} alt={person.name} className='w-60 h-60 object-cover rounded-md' />
                    <h4 className='text-lg font-semibold text-gray-800'>{person.name}</h4>
                    <p className='text-gray-600'>{person.role}</p>
                    <p className='text-gray-600'>{person.bio}</p>
<a href='#'  className='text-gray-900 underline'>Learn More</a>

                </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default OurTeam
