// export async function addProduct(data: ProductFormPros) {
//   const { name, category, description, price, sizes } = data;

//   // const bytes = await images.map( img => img.arrayBuffer())
//   try {
//     const product = await prisma.products.create({
//       data: {
//         name: name,
//         description: description,
//         categoryId: Number(category),
//         sizeId: Number(sizes),
//         price: new Prisma.Decimal(price),
//         images: ''
//       }
//     })

//     if (product) {
//       revalidatePath('/admin/products')
//       redirect('/admin/products')
//     }
//   } catch (error) {
//     throw error;
//   }
// }