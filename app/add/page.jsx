import {InputLarge, InputMedium, InputSmall} from '@/components/add_offer/input_field'
import {ListInput} from '@/components/add_offer/list_input'
import {ImageGallery} from '@/components/add_offer/image_blocks'
import {FullDescription} from '@/components/add_offer/desciption_fields'
import { PriceInput } from '@/components/add_offer/price_input'
import { TimeInput } from '@/components/add_offer/time_input'
import { FormFooter } from '@/components/add_offer/footer'
import Image from 'next/image';
import upload from '../../public/upload.svg'

export default function Add() {
    return (
        <>
            <div className='max-w-[1120px] mx-auto my-12'>
                <p className='text-l'>Add Offer</p>
                <form className='flex flex-col'>
                    <div className='p-12 bg-white rounded'>
                        <InputLarge name="Name" placeholder="for ex. UI UX android app design"/>
                        <div className='flex gap-5'>
                            <ListInput name="Category" placeholder="choose category"/>
                            <ListInput name="Sub-Category" placeholder="choose sub-category"/>
                        </div>
                        <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>
                        <ImageGallery/>
                        <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>
                        <FullDescription/>
                        <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>
                        <div className='flex gap-12'>
                            <PriceInput/>
                            <TimeInput/>
                        </div>
                    </div>

                    <FormFooter/>

                </form>
            </div>
        </>
    )
}
