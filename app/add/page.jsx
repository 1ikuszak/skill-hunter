import {InputLarge, InputMedium, InputSmall} from '../../components/add_offer/input_field'
import Image from 'next/image';
import upload from '../../public/upload.svg'

export default function Add() {
    return (
        <>
            <div className='max-w-[1120px] mx-auto my-12'>
                <p className='text-l'>Add Offer</p>
                <form className='flex flex-col p-12 bg-white'>
                    <InputLarge name="Name" placeholder="for ex. UI UX android app design"/>
                    <div className='flex gap-5'>
                        <InputMedium name="yoo" placeholder="sads" />
                        <InputMedium name="yoo" placeholder="sads" />
                    </div>
                </form>
            </div>
        </>
    )
}
