import { useState, useEffect } from 'react';
import supabase from '../supabase'; // Import your supabase client

const useSupabaseImages = (category: string) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from(category)
        .list('', { limit: 100, offset: 0 });
      console.log('data', data);
      if (error) {
        console.error('Error fetching images', error);
        setLoading(false);
        return;
      }

      const urls: any = data.map((file: any) => {
        return supabase.storage.from(category).getPublicUrl(file.name).data
          .publicUrl;
      });

      setImages(urls);
      setLoading(false);
    }

    fetchImages();
  }, [category]);

  return { images, loading };
};

export default useSupabaseImages;
