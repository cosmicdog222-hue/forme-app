// ============================================
// CLOTHING FIT FINDER - MAIN APPLICATION
// ============================================

// ============================================
// EXPANDED CLOTHING DATABASE (100+ Items)
// ============================================
const clothingDatabase = {
    men: [
        // ===== TOPS - 20 items =====
        { id: 100, name: "Classic Cotton T-Shirt", category: "tops", color: "white", material: "cotton", style: "casual", price: 19.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 86-96, medium: 96-107, large: 107-117, xl: 117-127 }, shoulder: { small: 40-44, medium: 44-48, large: 48-52, xl: 52-56 } } },
        { id: 101, name: "Premium Cotton T-Shirt", category: "tops", color: "black", material: "cotton", style: "casual", price: 24.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 86-96, medium: 96-107, large: 107-117, xl: 117-127 }, shoulder: { small: 40-44, medium: 44-48, large: 48-52, xl: 52-56 } } },
        { id: 102, name: "V-Neck T-Shirt", category: "tops", color: "gray", material: "cotton", style: "casual", price: 22.99, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 86-96, medium: 96-107, large: 107-117, xl: 117-127 }, shoulder: { small: 40-44, medium: 44-48, large: 48-52, xl: 52-56 } } },
        { id: 103, name: "Polo Shirt", category: "tops", color: "navy", material: "cotton", style: "casual", price: 39.99, image: "https://images.unsplash.com/photo-1625910513413-5fc08ef62cf8?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 104, name: "Striped Polo Shirt", category: "tops", color: "white", material: "cotton", style: "casual", price: 44.99, image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 105, name: "Henley Shirt", category: "tops", color: "blue", material: "cotton", style: "casual", price: 34.99, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 106, name: "Graphic Print T-Shirt", category: "tops", color: "gray", material: "blend", style: "streetwear", price: 29.99, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 107, name: "Performance Athletic Tee", category: "tops", color: "green", material: "polyester", style: "athletic", price: 35.99, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 86-96, medium: 96-107, large: 107-117, xl: 117-127 } } },
        { id: 108, name: "Mesh Athletic Shirt", category: "tops", color: "black", material: "polyester", style: "athletic", price: 42.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 86-96, medium: 96-107, large: 107-117, xl: 117-127 } } },
        { id: 109, name: "Tank Top", category: "tops", color: "white", material: "cotton", style: "athletic", price: 18.99, image: "https://images.unsplash.com/photo-1588117260144-3c3a4850df5c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 86-96, medium: 96-107, large: 107-117, xl: 117-127 } } },
        { id: 110, name: "Muscle Tee", category: "tops", color: "black", material: "cotton", style: "athletic", price: 21.99, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 111, name: "Long Sleeve Tee", category: "tops", color: "brown", material: "cotton", style: "casual", price: 28.99, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 112, name: "Thermal Shirt", category: "tops", color: "gray", material: "cotton", style: "casual", price: 32.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3835535d?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 113, name: "Flannel Shirt", category: "tops", color: "red", material: "cotton", style: "casual", price: 49.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 114, name: "Plaid Flannel", category: "tops", color: "black", material: "cotton", style: "casual", price: 54.99, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 115, name: "Baseball Tee", category: "tops", color: "blue", material: "cotton", style: "casual", price: 26.99, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 116, name: "Raglan Sleeve Tee", category: "tops", color: "white", material: "cotton", style: "casual", price: 24.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 117, name: "Pocket T-Shirt", category: "tops", color: "navy", material: "cotton", style: "casual", price: 23.99, image: "https://images.unsplash.com/photo-1625910513413-5fc08ef62cf8?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 118, name: "Distressed Tee", category: "tops", color: "gray", material: "cotton", style: "streetwear", price: 32.99, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 119, name: "Vintage Washed Tee", category: "tops", color: "beige", material: "cotton", style: "casual", price: 27.99, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },

        // ===== SHIRTS - 10 items (sample) =====
        { id: 200, name: "Oxford Button-Down", category: "shirts", color: "white", material: "cotton", style: "business", price: 59.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 96-104, medium: 104-112, large: 112-120, xl: 120-128 }, neck: { small: 36-38, medium: 38-40, large: 40-42, xl: 42-44 } } },
        { id: 201, name: "Oxford Button-Down", category: "shirts", color: "blue", material: "cotton", style: "business", price: 59.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 96-104, medium: 104-112, large: 112-120, xl: 120-128 }, neck: { small: 36-38, medium: 38-40, large: 40-42, xl: 42-44 } } },
        { id: 202, name: "Dress Shirt", category: "shirts", color: "white", material: "cotton", style: "formal", price: 79.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 94-102, medium: 102-110, large: 110-118, xl: 118-126 }, neck: { small: 35-37, medium: 37-39, large: 39-41, xl: 41-43 } } },
        { id: 203, name: "Slim Fit Dress Shirt", category: "shirts", color: "black", material: "cotton", style: "formal", price: 89.99, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 }, neck: { small: 35-37, medium: 37-39, large: 39-41, xl: 41-43 } } },
        { id: 204, name: "Spread Collar Shirt", category: "shirts", color: "gray", material: "cotton", style: "business", price: 74.99, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 96-104, medium: 104-112, large: 112-120, xl: 120-128 }, neck: { small: 36-38, medium: 38-40, large: 40-42, xl: 42-44 } } },
        { id: 205, name: "Patterned Dress Shirt", category: "shirts", color: "blue", material: "cotton", style: "business", price: 69.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 96-104, medium: 104-112, large: 112-120, xl: 120-128 }, neck: { small: 36-38, medium: 38-40, large: 40-42, xl: 42-44 } } },
        { id: 206, name: "Checkered Shirt", category: "shirts", color: "red", material: "cotton", style: "casual", price: 54.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 207, name: "Chambray Shirt", category: "shirts", color: "navy", material: "cotton", style: "casual", price: 64.99, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 208, name: "Linen Button-Down", category: "shirts", color: "white", material: "linen", style: "business", price: 84.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 96-104, medium: 104-112, large: 112-120, xl: 120-128 }, neck: { small: 36-38, medium: 38-40, large: 40-42, xl: 42-44 } } },
        { id: 209, name: "Linen Shirt", category: "shirts", color: "beige", material: "linen", style: "casual", price: 79.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },

        // ===== PANTS - 10 items (sample) =====
        { id: 300, name: "Classic Fit Jeans", category: "pants", color: "blue", material: "denim", style: "casual", price: 59.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 301, name: "Slim Fit Jeans", category: "pants", color: "black", material: "denim", style: "casual", price: 69.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 302, name: "Straight Leg Jeans", category: "pants", color: "gray", material: "denim", style: "casual", price: 64.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 303, name: "Relaxed Fit Jeans", category: "pants", color: "blue", material: "denim", style: "casual", price: 54.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 304, name: "Skinny Jeans", category: "pants", color: "black", material: "denim", style: "casual", price: 74.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 305, name: "Ripped Jeans", category: "pants", color: "blue", material: "denim", style: "streetwear", price: 79.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 306, name: "Dress Pants", category: "pants", color: "black", material: "polyester", style: "formal", price: 89.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop", sizeGuide: { waist: { 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96, 38: 96-101 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 307, name: "Tailored Dress Slacks", category: "pants", color: "navy", material: "polyester", style: "formal", price: 99.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop", sizeGuide: { waist: { 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96, 38: 96-101 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 308, name: "Chino Pants", category: "pants", color: "beige", material: "cotton", style: "business", price: 64.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },
        { id: 309, name: "Cargo Pants", category: "pants", color: "green", material: "cotton", style: "casual", price: 69.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop", sizeGuide: { waist: { 28: 71-76, 30: 76-81, 32: 81-86, 34: 86-91, 36: 91-96 }, inseam: { 30: 76, 32: 81, 34: 86 } } },

        // ===== JACKETS - 10 items (sample) =====
        { id: 400, name: "Denim Jacket", category: "jackets", color: "blue", material: "denim", style: "casual", price: 89.99, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } },
        { id: 401, name: "Bomber Jacket", category: "jackets", color: "black", material: "polyester", style: "casual", price: 99.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } },
        { id: 402, name: "Leather Jacket", category: "jackets", color: "black", material: "blend", style: "streetwear", price: 199.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } },
        { id: 403, name: "Wool Blazer", category: "jackets", color: "navy", material: "wool", style: "business", price: 159.99, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 97-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 404, name: "Casual Blazer", category: "jackets", color: "black", material: "blend", style: "business", price: 139.99, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 97-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 405, name: "Quilted Jacket", category: "jackets", color: "brown", material: "blend", style: "casual", price: 119.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } },
        { id: 406, name: "Track Jacket", category: "jackets", color: "green", material: "polyester", style: "athletic", price: 69.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 96-106, medium: 106-116, large: 116-126, xl: 126-136 } } },
        { id: 407, name: "Windbreaker", category: "jackets", color: "blue", material: "polyester", style: "athletic", price: 84.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } },
        { id: 408, name: "Puffer Jacket", category: "jackets", color: "black", material: "polyester", style: "casual", price: 129.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } },
        { id: 409, name: "Utility Jacket", category: "jackets", color: "beige", material: "cotton", style: "casual", price: 109.99, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop", sizeGuide: { chest: { small: 99-109, medium: 109-119, large: 119-129, xl: 129-139 } } }
    ],

    women: [
        // ===== TOPS - 15 items (sample) =====
        { id: 500, name: "V-Neck T-Shirt", category: "tops", color: "white", material: "cotton", style: "casual", price: 24.99, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 501, name: "V-Neck T-Shirt", category: "tops", color: "black", material: "cotton", style: "casual", price: 24.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 502, name: "Crew Neck Tee", category: "tops", color: "gray", material: "cotton", style: "casual", price: 22.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 503, name: "Scoop Neck Tee", category: "tops", color: "blue", material: "cotton", style: "casual", price: 24.99, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 504, name: "Crop Top", category: "tops", color: "black", material: "cotton", style: "casual", price: 19.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 505, name: "Oversized T-Shirt", category: "tops", color: "gray", material: "cotton", style: "casual", price: 27.99, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 } } },
        { id: 506, name: "Tank Top", category: "tops", color: "white", material: "cotton", style: "athletic", price: 17.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 507, name: "Graphic T-Shirt", category: "tops", color: "white", material: "cotton", style: "casual", price: 29.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 508, name: "Long Sleeve Tee", category: "tops", color: "blue", material: "cotton", style: "casual", price: 29.99, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 509, name: "Striped Tee", category: "tops", color: "red", material: "cotton", style: "casual", price: 26.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 510, name: "Flowy Blouse", category: "tops", color: "white", material: "cotton", style: "casual", price: 44.99, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 } } },
        { id: 511, name: "Peplum Top", category: "tops", color: "black", material: "cotton", style: "business", price: 49.99, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 } } },
        { id: 512, name: "Wrap Top", category: "tops", color: "blue", material: "cotton", style: "business", price: 54.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 } } },
        { id: 513, name: "Mesh Athletic Top", category: "tops", color: "green", material: "polyester", style: "athletic", price: 34.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 514, name: "Knit Sweater", category: "tops", color: "beige", material: "wool", style: "casual", price: 64.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3835535d?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-94, small: 94-102, medium: 102-110, large: 110-118, xl: 118-126 } } },

        // ===== SHIRTS - 8 items (sample) =====
        { id: 600, name: "Crisp White Shirt", category: "shirts", color: "white", material: "cotton", style: "business", price: 59.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 601, name: "Button-Down Shirt", category: "shirts", color: "blue", material: "cotton", style: "business", price: 54.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 602, name: "Striped Shirt", category: "shirts", color: "white", material: "cotton", style: "business", price: 49.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 603, name: "Plaid Shirt", category: "shirts", color: "red", material: "cotton", style: "casual", price: 49.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 604, name: "Linen Shirt", category: "shirts", color: "beige", material: "linen", style: "business", price: 69.99, image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 605, name: "Ruffle Blouse", category: "shirts", color: "blue", material: "cotton", style: "business", price: 64.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 } } },
        { id: 606, name: "Sheer Blouse", category: "shirts", color: "white", material: "blend", style: "formal", price: 69.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 607, name: "Silk Blouse", category: "shirts", color: "white", material: "blend", style: "formal", price: 79.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 } } },

        // ===== PANTS - 10 items (sample) =====
        { id: 700, name: "High-Waisted Jeans", category: "pants", color: "blue", material: "denim", style: "casual", price: 69.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", sizeGuide: { waist: { 24: 61-66, 26: 66-71, 28: 71-76, 30: 76-81, 32: 81-86 }, hips: { 24: 86-94, 26: 94-102, 28: 102-109, 30: 109-117, 32: 117-125 } } },
        { id: 701, name: "Mom Jeans", category: "pants", color: "blue", material: "denim", style: "casual", price: 74.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", sizeGuide: { waist: { 24: 61-66, 26: 66-71, 28: 71-76, 30: 76-81, 32: 81-86 }, hips: { 24: 89-97, 26: 97-102, 28: 102-109, 30: 109-117, 32: 117-125 } } },
        { id: 702, name: "Skinny Jeans", category: "pants", color: "black", material: "denim", style: "casual", price: 79.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", sizeGuide: { waist: { 24: 61-66, 26: 66-71, 28: 71-76, 30: 76-81, 32: 81-86 }, hips: { 24: 86-94, 26: 94-102, 28: 102-109, 30: 109-117, 32: 117-125 } } },
        { id: 703, name: "Dress Pants", category: "pants", color: "black", material: "polyester", style: "formal", price: 89.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop", sizeGuide: { waist: { 0: 58-64, 2: 64-69, 4: 69-74, 6: 74-79, 8: 79-84 }, hips: { 0: 81-89, 2: 89-94, 4: 94-99, 6: 99-104, 8: 104-109 } } },
        { id: 704, name:Business Slacks", category: "pants", color: "navy", material: "polyester", style: "business", price: 94.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop", sizeGuide: { waist: { 0: 58-64, 2: 64-69, 4: 69-74, 6: 74-79, 8: 79-84 }, hips: { 0: 81-89, 2: 89-94, 4: 94-99, 6: 99-104, 8: 104-109 } } },
        { id: 705, name: "Chinos", category: "pants", color: "beige", material: "cotton", style: "business", price: 64.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop", sizeGuide: { waist: { 0: 58-64, 2: 64-69, 4: 69-74, 6: 74-79, 8: 79-84 }, hips: { 0: 81-89, 2: 89-94, 4: 94-99, 6: 99-104, 8: 104-109 } } },
        { id: 706, name: "Cargo Pants", category: "pants", color: "green", material: "cotton", style: "casual", price: 69.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop", sizeGuide: { waist: { 0: 58-64, 2: 64-69, 4: 69-74, 6: 74-79, 8: 79-84 }, hips: { 0: 86-94, 2: 94-102, 4: 102-109, 6: 109-117, 8: 117-125 } } },
        { id: 707, name: "Yoga Pants", category: "pants", color: "black", material: "polyester", style: "athletic", price: 54.99, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop", sizeGuide: { waist: { xs: 61-71, small: 71-81, medium: 81-91, large: 91-101, xl: 101-111 }, hips: { xs: 84-94, small: 94-104, medium: 104-114, large: 114-124, xl: 124-134 } } },
        { id: 708, name: "Leggings", category: "pants", color: "black", material: "polyester", style: "athletic", price: 39.99, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop", sizeGuide: { waist: { xs: 61-71, small: 71-81, medium: 81-91, large: 91-101, xl: 101-111 }, hips: { xs: 84-94, small: 94-104, medium: 104-114, large: 114-124, xl: 124-134 } } },
        { id: 709, name: "Palazzo Pants", category: "pants", color: "white", material: "cotton", style: "formal", price: 89.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop", sizeGuide: { waist: { 0: 58-64, 2: 64-69, 4: 69-74, 6: 74-79, 8: 79-84 }, hips: { 0: 86-94, 2: 94-102, 4: 102-109, 6: 109-117, 8: 117-125 } } },

        // ===== DRESSES - 8 items (sample) =====
        { id: 800, name: "A-Line Dress", category: "dresses", color: "red", material: "cotton", style: "casual", price: 59.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 }, waist: { xs: 58-64, small: 64-71, medium: 71-79, large: 79-86, xl: 86-94 }, hips: { xs: 84-92, small: 92-100, medium: 100-109, large: 109-117, xl: 117-125 } } },
        { id: 801, name: "Wrap Dress", category: "dresses", color: "black", material: "polyester", style: "business", price: 79.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 }, waist: { xs: 61-69, small: 69-77, medium: 77-86, large: 86-94, xl: 94-103 }, hips: { xs: 89-97, small: 97-105, medium: 105-113, large: 113-121, xl: 121-129 } } },
        { id: 802, name: "Summer Dress", category: "dresses", color: "white", material: "cotton", style: "casual", price: 54.99, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 }, waist: { xs: 58-64, small: 64-71, medium: 71-79, large: 79-86, xl: 86-94 }, hips: { xs: 84-92, small: 92-100, medium: 100-109, large: 109-117, xl: 117-125 } } },
        { id: 803, name: "Maxi Dress", category: "dresses", color: "blue", material: "cotton", style: "casual", price: 74.99, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 }, waist: { xs: 61-69, small: 69-77, medium: 77-86, large: 86-94, xl: 94-103 }, hips: { xs: 89-97, small: 97-105, medium: 105-113, large: 113-121, xl: 121-129 } } },
        { id: 804, name: "Bodycon Dress", category: "dresses", color: "black", material: "polyester", style: "formal", price: 89.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 76-84, small: 84-92, medium: 92-100, large: 100-108, xl: 108-116 }, waist: { xs: 56-64, small: 64-72, medium: 72-80, large: 80-88, xl: 88-96 }, hips: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 } } },
        { id: 805, name: "Cocktail Dress", category: "dresses", color: "black", material: "polyester", style: "formal", price: 129.99, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 79-86, small: 86-94, medium: 94-102, large: 102-110, xl: 110-118 }, waist: { xs: 58-66, small: 66-74, medium: 74-82, large: 82-90, xl: 90-99 }, hips: { xs: 84-92, small: 92-100, medium: 100-109, large: 109-117, xl: 117-125 } } },
        { id: 806, name: "Shift Dress", category: "dresses", color: "navy", material: "cotton", style: "business", price: 69.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-89, small: 89-97, medium: 97-105, large: 105-113, xl: 113-121 }, waist: { xs: 61-69, small: 69-77, medium: 77-86, large: 86-94, xl: 94-103 }, hips: { xs: 89-97, small: 97-105, medium: 105-113, large: 113-121, xl: 121-129 } } },
        { id: 807, name: "Midi Dress", category: "dresses", color: "green", material: "cotton", style: "casual", price: 69.99, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-91, small: 91-99, medium: 99-107, large: 107-115, xl: 115-123 }, waist: { xs: 61-69, small: 69-77, medium: 77-86, large: 86-94, xl: 94-103 }, hips: { xs: 89-97, small: 97-105, medium: 105-113, large: 113-121, xl: 121-129 } } },

        // ===== JACKETS - 8 items (sample) =====
        { id: 900, name: "Denim Jacket", category: "jackets", color: "blue", material: "denim", style: "casual", price: 89.99, image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 901, name: "Bomber Jacket", category: "jackets", color: "black", material: "polyester", style: "casual", price: 99.99, image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 902, name: "Leather Jacket", category: "jackets", color: "black", material: "blend", style: "streetwear", price: 189.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 903, name: "Blazer", category: "jackets", color: "navy", material: "wool", style: "business", price: 149.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-94, small: 94-104, medium: 104-114, large: 114-124, xl: 124-134 } } },
        { id: 904, name: "Cropped Blazer", category: "jackets", color: "white", material: "blend", style: "business", price: 129.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 84-94, small: 94-104, medium: 104-114, large: 114-124, xl: 124-134 } } },
        { id: 905, name: "Puffer Jacket", category: "jackets", color: "black", material: "polyester", style: "casual", price: 129.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 91-99, small: 99-107, medium: 107-115, large: 115-123, xl: 123-131 } } },
        { id: 906, name: "Track Jacket", category: "jackets", color: "gray", material: "polyester", style: "athletic", price: 74.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 907, name: "Cardigan", category: "jackets", color: "white", material: "cotton", style: "casual", price: 59.99, image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 91-99, small: 99-107, medium: 107-115, large: 115-123, xl: 123-131 } } },
        
        // ===== ACTIVEWEAR - 5 items (sample) =====
        { id: 1000, name: "Sports Bra", category: "activewear", color: "black", material: "polyester", style: "athletic", price: 34.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 1001, name: "Yoga Crop Top", category: "activewear", color: "navy", material: "polyester", style: "athletic", price: 39.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } },
        { id: 1002, name: "High-Waisted Leggings", category: "activewear", color: "black", material: "polyester", style: "athletic", price: 54.99, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop", sizeGuide: { waist: { xs: 61-71, small: 71-81, medium: 81-91, large: 91-101, xl: 101-111 }, hips: { xs: 84-94, small: 94-104, medium: 104-114, large: 114-124, xl: 124-134 } } },
        { id: 1003, name: "Compression Leggings", category: "activewear", color: "gray", material: "polyester", style: "athletic", price: 64.99, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop", sizeGuide: { waist: { xs: 61-71, small: 71-81, medium: 81-91, large: 91-101, xl: 101-111 }, hips: { xs: 84-94, small: 94-104, medium: 104-114, large: 114-124, xl: 124-134 } } },
        { id: 1004, name: "Training Set", category: "activewear", color: "purple", material: "polyester", style: "athletic", price: 99.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115 } } }
    ],

    unisex: [
        { id: 1100, name: "Classic Hoodie", category: "tops", color: "gray", material: "cotton", style: "casual", price: 49.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 1101, name: "Zip-Up Hoodie", category: "tops", color: "black", material: "cotton", style: "casual", price: 54.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 1102, name: "Pullover Hoodie", category: "tops", color: "navy", material: "cotton", style: "casual", price: 49.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 1103, name: "Performance Hoodie", category: "tops", color: "gray", material: "polyester", style: "athletic", price: 64.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 1104, name: "Performance Activewear Set", category: "activewear", color: "black", material: "polyester", style: "athletic", price: 99.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-91, small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 1105, name: "Matching Tracksuit", category: "activewear", color: "gray", material: "polyester", style: "athletic", price: 89.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 81-91, small: 91-101, medium: 101-111, large: 111-121, xl: 121-131 } } },
        { id: 1106, name: "Basic Tee", category: "tops", color: "white", material: "cotton", style: "casual", price: 19.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 1107, name: "Basic Tee", category: "tops", color: "black", material: "cotton", style: "casual", price: 19.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } },
        { id: 1108, name: "Sweatshirt", category: "tops", color: "gray", material: "cotton", style: "casual", price: 39.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3835535d?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 91-99, small: 99-107, medium: 107-115, large: 115-123, xl: 123-131 } } },
        { id: 1109, name: "Track Jacket", category: "jackets", color: "black", material: "polyester", style: "athletic", price: 64.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop", sizeGuide: { chest: { xs: 86-96, small: 96-107, medium: 107-117, large: 117-127, xl: 127-137 } } }
    ]
};

// ============================================
// API INTEGRATION STRUCTURE
// ============================================
const APIServices = {
    // Configuration for external clothing APIs
    config: {
        useExternalAPI: true, // Set to true to use external API
        API_BASE_URL: "https://api.escuelajs.co/api/v1",  // Platzi Fake Store API (FREE!)
        API_KEY: ""  // Some APIs require keys, Platzi doesn't need one
    },
    
    // Cache for API responses to improve performance
    cache: new Map(),
    
    // Fetch clothing from external API
    async fetchFromExternalAPI(params) {
        if (!this.config.useExternalAPI) {
            console.log('External API disabled. Using demo database.');
            return [];
        }
        
        // Check cache first
        const cacheKey = 'products_' + (params.gender || 'all');
        const cached = this.cache.get(cacheKey);
        
        // Return cached data if less than 30 minutes old
        if (cached && Date.now() - cached.timestamp < 1800000) {
            console.log('📦 Using cached data from API');
            return cached.data;
        }
        
        try {
            console.log('🔌 Fetching data from external API...');
            
            // Fetch products from Platzi API
            const response = await fetch(`${this.config.API_BASE_URL}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) throw new Error('API request failed');
            
            const allProducts = await response.json();
            
            // Cache the result
            this.cache.set(cacheKey, { data: allProducts, timestamp: Date.now() });
            
            console.log(`✅ Fetched ${allProducts.length} products from API`);
            return allProducts;
        } catch (error) {
            console.error('❌ API Error:', error);
            return [];
        }
    },
    
    // Format API response to match our data structure
    formatAPIResponse(apiData) {
        const gender = document.querySelector('input[name="gender"]:checked')?.value || 'male';
        
        return apiData.map(item => ({
            id: item.id,
            name: item.title,
            category: this.mapAPICategory(item.category?.name || 'Clothes'),
            color: this.extractColor(item.title),
            material: this.extractMaterial(item.title),
            style: this.extractStyle(item.title),
            price: item.price,
            image: item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/500?text=No+Image',
            sizeGuide: this.generateSizeGuide(gender),
            description: item.description || ''
        }));
    },
    
    // Extract color from product title
    extractColor(title) {
        const colors = {
            'black': ['black', 'dark', 'ebony'],
            'white': ['white', 'ivory', 'cream', 'snow'],
            'blue': ['blue', 'navy', 'azure', 'sky', 'denim'],
            'red': ['red', 'crimson', 'scarlet', 'ruby'],
            'gray': ['gray', 'grey', 'heather', 'charcoal'],
            'green': ['green', 'olive', 'forest', 'sage', 'emerald'],
            'brown': ['brown', 'tan', 'beige', 'camel', 'khaki'],
            'purple': ['purple', 'violet', 'lavender', 'plum'],
            'yellow': ['yellow', 'gold', 'amber', 'mustard'],
            'orange': ['orange', 'tangerine', 'coral'],
            'pink': ['pink', 'rose', 'salmon', 'fuchsia']
        };
        
        const lowerTitle = title.toLowerCase();
        for (const [color, keywords] of Object.entries(colors)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) return color;
            }
        }
        return 'various';
    },
    
    // Extract material from product title
    extractMaterial(title) {
        const materials = {
            'cotton': ['cotton', 'organic', 'pima'],
            'polyester': ['polyester', 'synthetic', 'blend'],
            'wool': ['wool', 'cashmere', 'merino'],
            'denim': ['denim', 'jean'],
            'linen': ['linen', 'flax']
        };
        
        const lowerTitle = title.toLowerCase();
        for (const [material, keywords] of Object.entries(materials)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) return material;
            }
        }
        return 'blend';
    },
    
    // Extract style from product title
    extractStyle(title) {
        const styles = {
            'athletic': ['sport', 'athletic', 'performance', 'workout', 'gym', 'training', 'running'],
            'formal': ['dress', 'formal', 'elegant', 'suit', 'professional', 'business'],
            'streetwear': ['urban', 'street', 'cool', 'trendy', 'fashion'],
            'casual': ['casual', 'comfort', 'everyday', 'classic', 'basic']
        };
        
        const lowerTitle = title.toLowerCase();
        for (const [style, keywords] of Object.entries(styles)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) return style;
            }
        }
        return 'casual';
    },
    
    // Generate size guide based on gender
    generateSizeGuide(gender) {
        if (gender === 'male') {
            return {
                chest: { xs: 81-91, small: 91-101, medium: 101-111, large: 111-121, xl: 121-131, xxl: 131-141 },
                shoulder: { xs: 38-42, small: 42-46, medium: 46-50, large: 50-54, xl: 54-58, xxl: 58-62 }
            };
        } else {
            return {
                chest: { xs: 78-84, small: 84-91, medium: 91-99, large: 99-107, xl: 107-115, xxl: 115-123 },
                waist: { xs: 58-64, small: 64-71, medium: 71-79, large: 79-86, xl: 86-94, xxl: 94-102 }
            };
        }
    },
    
    // Map API categories to our categories
    mapAPICategory(apiCategory) {
        const categoryMap = {
            'clothes': 'tops',  // Map general clothes to tops
            'shoes': 'tops',     // Map shoes to tops for now
            'electronics': 'activewear',
            'furniture': 'tops',
            'miscellaneous': 'tops'
        };
        const lowerCategory = apiCategory.toLowerCase().trim();
        return categoryMap[lowerCategory] || 'tops';
    }
};

// ============================================
// GLOBAL STATE
// ============================================
let currentResults = [];
let filteredResults = [];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('👕 Forme loaded!');
    console.log(`Database contains ${clothingDatabase.men.length + clothingDatabase.women.length + clothingDatabase.unisex.length} items`);
    
    loadSavedData();
    setupEventListeners();
});

// ============================================
// DATA PERSISTENCE
// ============================================
function loadSavedData() {
    const savedData = localStorage.getItem('clothingMeasurements');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        document.getElementById('savedInfo').style.display = 'block';
        document.getElementById('savedDate').textContent = new Date(data.timestamp).toLocaleString();
        
        const gender = document.querySelector(`input[name="gender"][value="${data.gender}"]`);
        if (gender) gender.checked = true;
        
        document.getElementById('height').value = data.height || '';
        document.getElementById('weight').value = data.weight || '';
        document.getElementById('chest').value = data.chest || '';
        document.getElementById('waist').value = data.waist || '';
        document.getElementById('shoulders').value = data.shoulders || '';
        document.getElementById('neck').value = data.neck || '';
        document.getElementById('armLength').value = data.armLength || '';
        document.getElementById('bicep').value = data.bicep || '';
        document.getElementById('hips').value = data.hips || '';
        document.getElementById('inseam').value = data.inseam || '';
        document.getElementById('thigh').value = data.thigh || '';
        document.getElementById('legLength').value = data.legLength || '';
        
        document.getElementById('color').value = data.color || 'all';
        document.getElementById('material').value = data.material || 'all';
        document.getElementById('style').value = data.style || 'all';
        document.getElementById('priceRange').value = data.priceRange || 'all';
        
        if (data.categories) {
            document.querySelectorAll('input[name="category"]').forEach(checkbox => {
                checkbox.checked = data.categories.includes(checkbox.value);
            });
        }
        
        if (data.chest || data.waist || data.hips) {
            searchClothing();
        }
    }
}

function saveMeasurements() {
    const formData = {
        gender: document.querySelector('input[name="gender"]:checked').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        chest: document.getElementById('chest').value,
        waist: document.getElementById('waist').value,
        shoulders: document.getElementById('shoulders').value,
        neck: document.getElementById('neck').value,
        armLength: document.getElementById('armLength').value,
        bicep: document.getElementById('bicep').value,
        hips: document.getElementById('hips').value,
        inseam: document.getElementById('inseam').value,
        thigh: document.getElementById('thigh').value,
        legLength: document.getElementById('legLength').value,
        color: document.getElementById('color').value,
        material: document.getElementById('material').value,
        style: document.getElementById('style').value,
        priceRange: document.getElementById('priceRange').value,
        categories: Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value),
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('clothingMeasurements', JSON.stringify(formData));
    document.getElementById('savedInfo').style.display = 'block';
    document.getElementById('savedDate').textContent = new Date().toLocaleString();
    alert('✓ Your measurements have been saved!');
}

function clearSavedData() {
    if (confirm('Are you sure you want to clear your saved measurements?')) {
        localStorage.removeItem('clothingMeasurements');
        document.getElementById('savedInfo').style.display = 'none';
        document.getElementById('measurementForm').reset();
        currentResults = [];
        filteredResults = [];
        showEmptyState();
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    document.getElementById('measurementForm').addEventListener('submit', searchClothing);
    document.getElementById('saveDataBtn').addEventListener('click', saveMeasurements);
    document.getElementById('clearDataBtn').addEventListener('click', clearSavedData);
    document.getElementById('filterCategory').addEventListener('change', applyFilters);
    document.getElementById('filterFitScore').addEventListener('change', applyFilters);
    document.getElementById('sortBy').addEventListener('change', applyFilters);
}

// ============================================
// MAIN SEARCH FUNCTION
// ============================================
function searchClothing(event) {
    if (event) event.preventDefault();
    showLoadingState();
    
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const color = document.getElementById('color').value;
    const material = document.getElementById('material').value;
    const style = document.getElementById('style').value;
    const priceRange = document.getElementById('priceRange').value;
    
    const measurements = {
        chest: parseFloat(document.getElementById('chest').value),
        waist: parseFloat(document.getElementById('waist').value),
        hips: parseFloat(document.getElementById('hips').value),
        inseam: parseFloat(document.getElementById('inseam').value),
        shoulders: parseFloat(document.getElementById('shoulders').value),
        neck: parseFloat(document.getElementById('neck').value),
        armLength: parseFloat(document.getElementById('armLength').value),
        bicep: parseFloat(document.getElementById('bicep').value),
        thigh: parseFloat(document.getElementById('thigh').value),
        legLength: parseFloat(document.getElementById('legLength').value)
    };
    
    // Always load demo database immediately as baseline
    let demoClothing = [];
    if (gender === 'male') {
        demoClothing = [...clothingDatabase.men, ...clothingDatabase.unisex];
    } else if (gender === 'female') {
        demoClothing = [...clothingDatabase.women, ...clothingDatabase.unisex];
    } else {
        demoClothing = [...clothingDatabase.men, ...clothingDatabase.women, ...clothingDatabase.unisex];
    }

    // Show demo results immediately
    processClothingResults(demoClothing, measurements, categories, color, material, style, priceRange);

    // Then try to enrich with API data in background
    if (APIServices.config.useExternalAPI) {
        APIServices.fetchFromExternalAPI({ gender, categories }).then(apiData => {
            if (apiData && apiData.length > 0) {
                const apiClothing = APIServices.formatAPIResponse(apiData);
                const combined = [...demoClothing, ...apiClothing];
                processClothingResults(combined, measurements, categories, color, material, style, priceRange);
            }
        }).catch(() => {
            // API failed — demo results already shown, nothing to do
        });
    }
}

function processClothingResults(relevantClothing, measurements, categories, color, material, style, priceRange) {
    // Filter by preferences
    const filteredClothing = relevantClothing.filter(item => {
        if (categories.length > 0 && !categories.includes(item.category)) return false;
        if (color !== 'all' && !colorMatch(item.color, color)) return false;
        if (material !== 'all' && item.material !== material) return false;
        if (style !== 'all' && item.style !== style) return false;
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(v => v === '+' ? Infinity : parseFloat(v));
            if (item.price < min || item.price > max) return false;
        }
        return true;
    });
    
    // Calculate fit scores
    currentResults = filteredClothing.map(item => {
        const fitScore = calculateFitScore(measurements, item);
        const recommendedSize = getRecommendedSize(measurements, item);
        return {
            ...item,
            fitScore: fitScore,
            recommendedSize: recommendedSize
        };
    });
    
    // Only apply fit score filter if at least one measurement was entered
    const hasMeasurements = Object.values(measurements).some(v => v && !isNaN(v));
    if (hasMeasurements) {
        currentResults = currentResults.filter(item => item.fitScore >= 50);
    }
    currentResults.sort((a, b) => b.fitScore - a.fitScore);
    
    filteredResults = [...currentResults];
    applyFilters();
}

// Color matching function (handles color groups)
function colorMatch(itemColor, selectedColor) {
    if (!selectedColor || selectedColor === 'all') return true;
    if (!itemColor) return false;
    
    const colorGroups = {
        'blue': ['blue', 'navy', 'light blue'],
        'gray': ['gray', 'grey'],
        'white': ['white', 'off-white', 'cream'],
        'black': ['black'],
        'red': ['red', 'burgundy', 'maroon'],
        'green': ['green', 'olive', 'forest', 'sage', 'lime'],
        'brown': ['brown', 'tan', 'beige'],
        'purple': ['purple', 'violet'],
        'yellow': ['yellow', 'gold']
    };
    
    const itemColorLower = itemColor.toLowerCase();
    const selectedColorLower = selectedColor.toLowerCase();
    
    if (itemColorLower === selectedColorLower) return true;
    
    for (const [group, colors] of Object.entries(colorGroups)) {
        if (colors.includes(itemColorLower) && colors.includes(selectedColorLower)) {
            return true;
        }
    }
    
    return false;
}

// ============================================
// FIT CALCULATIONS
// ============================================
function calculateFitScore(measurements, item) {
    let score = 0;
    let factors = 0;
    
    const sizeGuide = item.sizeGuide;
    
    if (measurements.chest && sizeGuide.chest) {
        const chestMatch = findBestSizeMatch(measurements.chest, sizeGuide.chest);
        score += chestMatch.score;
        factors++;
    }
    
    if (measurements.waist && sizeGuide.waist) {
        const waistMatch = findBestSizeMatch(measurements.waist, sizeGuide.waist);
        score += waistMatch.score;
        factors++;
    }
    
    if (measurements.hips && sizeGuide.hips) {
        const hipsMatch = findBestSizeMatch(measurements.hips, sizeGuide.hips);
        score += hipsMatch.score;
        factors++;
    }
    
    if (measurements.inseam && sizeGuide.inseam) {
        const inseamMatch = findBestSizeMatch(measurements.inseam, sizeGuide.inseam);
        score += inseamMatch.score;
        factors++;
    }
    
    if (measurements.shoulders && sizeGuide.shoulder) {
        const shoulderMatch = findBestSizeMatch(measurements.shoulders, sizeGuide.shoulder);
        score += shoulderMatch.score;
        factors++;
    }
    
    if (measurements.neck && sizeGuide.neck) {
        const neckMatch = findBestSizeMatch(measurements.neck, sizeGuide.neck);
        score += neckMatch.score;
        factors++;
    }
    
    if (measurements.armLength && sizeGuide.armLength) {
        const armMatch = findBestSizeMatch(measurements.armLength, sizeGuide.armLength);
        score += armMatch.score;
        factors++;
    }
    
    return factors > 0 ? Math.round(score / factors) : 75;
}

function findBestSizeMatch(measurement, sizeRange) {
    let bestScore = 0;
    
    for (const [size, range] of Object.entries(sizeRange)) {
        const [min, max] = typeof range === 'string' ? range.split('-').map(Number) : [range, range];
        
        if (measurement >= min && measurement <= max) {
            const midpoint = (min + max) / 2;
            const distanceFromMidpoint = Math.abs(measurement - midpoint);
            const rangeWidth = max - min;
            const score = Math.max(0, 100 - (distanceFromMidpoint / (rangeWidth / 2 || 1)) * 30);
            bestScore = Math.max(bestScore, score);
        } else if (measurement < min) {
            const distance = min - measurement;
            const score = Math.max(0, 70 - distance * 2);
            bestScore = Math.max(bestScore, score);
        } else {
            const distance = measurement - max;
            const score = Math.max(0, 70 - distance * 2);
            bestScore = Math.max(bestScore, score);
        }
    }
    
    return { score: bestScore };
}

function getRecommendedSize(measurements, item) {
    const sizeGuide = item.sizeGuide;
    const sizeCounts = {};
    
    if (measurements.chest && sizeGuide.chest) {
        const match = findBestSizeMatch(measurements.chest, sizeGuide.chest);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 2;
    }
    
    if (measurements.waist && sizeGuide.waist) {
        const match = findBestSizeMatch(measurements.waist, sizeGuide.waist);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 2;
    }
    
    if (measurements.hips && sizeGuide.hips) {
        const match = findBestSizeMatch(measurements.hips, sizeGuide.hips);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 2;
    }
    
    if (measurements.inseam && sizeGuide.inseam) {
        const match = findBestSizeMatch(measurements.inseam, sizeGuide.inseam);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 1;
    }
    
    if (measurements.shoulders && sizeGuide.shoulder) {
        const match = findBestSizeMatch(measurements.shoulders, sizeGuide.shoulder);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 1;
    }
    
    if (measurements.neck && sizeGuide.neck) {
        const match = findBestSizeMatch(measurements.neck, sizeGuide.neck);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 1;
    }
    
    if (measurements.armLength && sizeGuide.armLength) {
        const match = findBestSizeMatch(measurements.armLength, sizeGuide.armLength);
        sizeCounts[match.size] = (sizeCounts[match.size] || 0) + 1;
    }
    
    let recommendedSize = null;
    let maxCount = 0;
    for (const [size, count] of Object.entries(sizeCounts)) {
        if (count > maxCount) {
            maxCount = count;
            recommendedSize = size;
        }
    }
    
    return recommendedSize || 'Not specified';
}

// ============================================
// FILTERING & DISPLAY
// ============================================
function applyFilters() {
    const filterCategory = document.getElementById('filterCategory').value;
    const filterFitScore = document.getElementById('filterFitScore').value;
    const sortBy = document.getElementById('sortBy').value;
    
    filteredResults = [...currentResults];
    
    if (filterCategory !== 'all') {
        filteredResults = filteredResults.filter(item => item.category === filterCategory);
    }
    
    if (filterFitScore !== 'all') {
        const minScore = parseInt(filterFitScore);
        filteredResults = filteredResults.filter(item => item.fitScore >= minScore);
    }
    
    switch (sortBy) {
        case 'fitScore':
            filteredResults.sort((a, b) => b.fitScore - a.fitScore);
            break;
        case 'priceLow':
            filteredResults.sort((a, b) => a.price - b.price);
            break;
        case 'priceHigh':
            filteredResults.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredResults.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayResults();
}

function displayResults() {
    const container = document.getElementById('resultsContainer');
    const countElement = document.getElementById('resultsCount');
    
    countElement.textContent = filteredResults.length;
    
    if (filteredResults.length === 0) {
        showEmptyState();
        return;
    }
    
    container.innerHTML = filteredResults.map(item => createProductCard(item)).join('');
}

function createProductCard(item) {
    let fitScoreText, fitScoreClass;
    if (item.fitScore >= 90) {
        fitScoreText = 'Perfect Match!';
        fitScoreClass = 'perfect';
    } else if (item.fitScore >= 80) {
        fitScoreText = 'Great Fit';
        fitScoreClass = 'great';
    } else if (item.fitScore >= 70) {
        fitScoreText = 'Good Match';
        fitScoreClass = 'good';
    } else {
        fitScoreText = 'Fair Match';
        fitScoreClass = 'fair';
    }
    
    return `
        <div class="product-card" data-fit-score="${item.fitScore}">
            <div style="position: relative;">
                <img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='https://via.placeholder.com/500x500?text=No+Image'">
                <span class="product-badge">${item.category}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${item.material} • ${item.style}</div>
                <h3 class="product-name">${item.name}</h3>
                <div class="product-size">📏Recommended: <strong>${item.recommendedSize}</strong></div>
                <div class="product-fit-score">${fitScoreText} (${item.fitScore}%)</div>
                <div class="product-details">
                    <span class="detail-tag" style="text-transform: capitalize;">${item.color}</span>
                    <span class="detail-tag">${item.material}</span>
                </div>
                <div class="product-price">$${item.price.toFixed(2)}</div>
                <a href="#" class="product-link" onclick="alert('In production mode, this would link to the store page!'); return false;">View Details →</a>
            </div>
        </div>
    `;
}

// ============================================
// UI STATES
// ============================================
function showEmptyState() {
    document.getElementById('resultsContainer').innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📏</div>
            <h3>Ready to Find Your Forme?</h3>
            <p>Enter your measurements and preferences on the left, then click "Find My Forme" to get personalized clothing recommendations based on your body measurements.</p>
            <p style="margin-top: 15px; color: #6b7280; font-size: 14px;">
                💡 <strong>Tip:</strong> Enter at least Chest, Waist, or Hip measurements for best results!
            </p>
        </div>
    `;
    document.getElementById('resultsCount').textContent = '0';
}

function showLoadingState() {
    document.getElementById('resultsContainer').innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <h3>Finding Your Forme...</h3>
            <p>Analyzing your measurements and searching for the best matches</p>
        </div>
    `;
}