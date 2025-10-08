// ===== SISTEMA DE TEMPLATES =====
const templates = {
	"natureza": [
		{
			id: "sunset-mountains",
			nome: "Pôr do Sol nas Montanhas",
			descricao: "Gradiente suave do laranja ao roxo com montanhas silhuetadas",
			categoria: "natureza",
			popularidade: 150,
			css: `.sunset-mountains { background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 25%, #ff6b6b 50%, #4ecdc4 75%, #45b7d1 100%); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -999; animation: sunsetGlow 8s ease-in-out infinite alternate; } @keyframes sunsetGlow { 0% { filter: hue-rotate(0deg) brightness(1); } 100% { filter: hue-rotate(10deg) brightness(1.1); } }`,
			html: `<div class="sunset-mountains"></div>`,
			tags: ["sunset", "montanhas", "gradiente"]
		},
		{
			id: "ocean-waves",
			nome: "Ondas do Oceano",
			descricao: "Movimento suave de ondas azuis com efeito de profundidade",
			categoria: "natureza",
			popularidade: 120,
			css: `.ocean-waves { background: linear-gradient(180deg, #1e3c72 0%, #2a5298 50%, #87ceeb 100%); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -999; overflow: hidden; } .ocean-waves::before { content: ''; position: absolute; top: 0; left: -50%; width: 200%; height: 100%; background: repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(255,255,255,0.1) 100px); animation: wave 3s ease-in-out infinite; } @keyframes wave { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(25%); } }`,
			html: `<div class="ocean-waves"></div>`,
			tags: ["oceano", "ondas", "azul"]
		}
	],
	"espacial": [
		{
			id: "galaxy-nebula",
			nome: "Nebulosa Galáctica",
			descricao: "Espaço profundo com nebulosa colorida e estrelas cintilantes",
			categoria: "espacial",
			popularidade: 200,
			css: `.galaxy-nebula { background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -999; animation: nebulaPulse 6s ease-in-out infinite; } .galaxy-nebula::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent); background-repeat: repeat; background-size: 200px 100px; animation: twinkle 4s ease-in-out infinite; } @keyframes nebulaPulse { 0%, 100% { filter: hue-rotate(0deg) saturate(1); } 50% { filter: hue-rotate(20deg) saturate(1.2); } } @keyframes twinkle { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }`,
			html: `<div class="galaxy-nebula"></div>`,
			tags: ["espaço", "galáxia", "estrelas"]
		}
	],
	"abstrato": [
		{
			id: "geometric-flow",
			nome: "Fluxo Geométrico",
			descricao: "Formas geométricas em movimento com gradientes vibrantes",
			categoria: "abstrato",
			popularidade: 90,
			css: `.geometric-flow { background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -999; } .geometric-flow::before { content: ''; position: absolute; top: 50%; left: 50%; width: 300px; height: 300px; background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: translate(-50%, -50%); animation: morph 8s ease-in-out infinite; } .geometric-flow::after { content: ''; position: absolute; top: 20%; left: 20%; width: 200px; height: 200px; background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%); border-radius: 50%; animation: float 6s ease-in-out infinite; } @keyframes morph { 0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; } 75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } } @keyframes float { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -30px) rotate(120deg); } 66% { transform: translate(-20px, 20px) rotate(240deg); } }`,
			html: `<div class="geometric-flow"></div>`,
			tags: ["geométrico", "abstrato", "formas"]
		}
	],
	"minimalista": [
		{
			id: "clean-gradient",
			nome: "Gradiente Limpo",
			descricao: "Design minimalista com gradiente suave e elegante",
			categoria: "minimalista",
			popularidade: 80,
			css: `.clean-gradient { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -999; animation: subtleShift 10s ease-in-out infinite; } @keyframes subtleShift { 0%, 100% { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); } 50% { background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); } }`,
			html: `<div class="clean-gradient"></div>`,
			tags: ["minimalista", "limpo", "elegante"]
		}
	],
	"neon": [
		{
			id: "cyber-grid",
			nome: "Grid Cyberpunk",
			descricao: "Grid futurista com efeitos neon e animações cyberpunk",
			categoria: "neon",
			popularidade: 180,
			css: `.cyber-grid { background: #0a0a0a; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -999; } .cyber-grid::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px; animation: gridMove 4s linear infinite; } .cyber-grid::after { content: ''; position: absolute; top: 50%; left: 50%; width: 200px; height: 200px; border: 2px solid #00ffff; border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 20px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1); animation: neonPulse 2s ease-in-out infinite; } @keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(50px, 50px); } } @keyframes neonPulse { 0%, 100% { box-shadow: 0 0 20px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1); } 50% { box-shadow: 0 0 40px #00ffff, inset 0 0 40px rgba(0, 255, 255, 0.2); } }`,
			html: `<div class="cyber-grid"></div>`,
			tags: ["cyberpunk", "neon", "futurista"]
		}
	]
};

// ===== FUNCIONALIDADES DA GALERIA =====
let currentFilter = 'todos';
let favorites = JSON.parse(localStorage.getItem('templateFavorites') || '[]');

function initializeTemplates() {
	console.log('🎨 Inicializando sistema de templates...');
	createTemplatesGallery();
	setupGalleryEvents();
	console.log('✅ Sistema de templates inicializado!');
}

function createTemplatesGallery() {
	console.log('📋 Criando galeria de templates...');
	const mainContent = document.querySelector('.main-content');

	if (!mainContent) {
		console.error('❌ Elemento .main-content não encontrado!');
		return;
	}

	if (document.querySelector('.templates-gallery')) {
		console.log('📋 Galeria já existe, removendo...');
		document.querySelector('.templates-gallery').remove();
	}

	const gallerySection = document.createElement('section');
	gallerySection.className = 'templates-gallery';
	gallerySection.innerHTML = `
    <div class="gallery-header">
      <h2 class="gallery-title">🎨 Galeria de Templates</h2>
      <p class="gallery-subtitle">Escolha um template pronto ou crie o seu com IA</p>
    </div>
    
    <div class="gallery-controls">
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="todos">Todos</button>
        <button class="filter-btn" data-filter="natureza">🌅 Natureza</button>
        <button class="filter-btn" data-filter="espacial">🌌 Espacial</button>
        <button class="filter-btn" data-filter="abstrato">🎨 Abstrato</button>
        <button class="filter-btn" data-filter="minimalista">💎 Minimalista</button>
        <button class="filter-btn" data-filter="neon">🔥 Neon</button>
      </div>
      
      <div class="search-container">
        <input type="text" id="template-search" placeholder="🔍 Buscar templates..." class="search-input">
      </div>
    </div>
    
    <div class="templates-grid" id="templates-grid">
    </div>
  `;

	try {
		mainContent.insertBefore(gallerySection, mainContent.children[1]);
		console.log('📋 Galeria inserida no DOM');
	} catch (error) {
		console.error('❌ Erro ao inserir galeria:', error);
		mainContent.appendChild(gallerySection);
		console.log('📋 Galeria inserida como último elemento');
	}

	renderTemplates();
	console.log('📋 Templates renderizados');
}

function renderTemplates(searchTerm = '') {
	console.log('🎨 Renderizando templates...');
	const grid = document.getElementById('templates-grid');

	if (!grid) {
		console.error('❌ Grid de templates não encontrado!');
		return;
	}

	grid.innerHTML = '';

	let allTemplates = [];
	Object.values(templates).forEach(category => {
		allTemplates = allTemplates.concat(category);
	});

	console.log('📊 Total de templates:', allTemplates.length);

	let filteredTemplates = allTemplates;
	if (currentFilter !== 'todos') {
		filteredTemplates = allTemplates.filter(template => template.categoria === currentFilter);
		console.log('🔍 Filtrados por categoria:', currentFilter, '-', filteredTemplates.length);
	}

	if (searchTerm) {
		filteredTemplates = filteredTemplates.filter(template =>
			template.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
		);
		console.log('🔍 Filtrados por busca:', searchTerm, '-', filteredTemplates.length);
	}

	filteredTemplates.sort((a, b) => b.popularidade - a.popularidade);

	filteredTemplates.forEach(template => {
		try {
			const templateCard = createTemplateCard(template);
			grid.appendChild(templateCard);
		} catch (error) {
			console.error('❌ Erro ao criar card do template:', template.id, error);
		}
	});

	if (filteredTemplates.length === 0) {
		grid.innerHTML = '<p class="no-results">Nenhum template encontrado. Tente outro termo de busca!</p>';
	}

	console.log('✅ Templates renderizados:', filteredTemplates.length);
}

function createTemplateCard(template) {
	console.log('🎨 Criando card para template:', template.id);

	const card = document.createElement('div');
	card.className = 'template-card';
	card.dataset.templateId = template.id;

	const isFavorite = favorites.includes(template.id);

	card.innerHTML = `
    <div class="template-preview" data-template-id="${template.id}">
      <div class="preview-content">
        <div class="preview-bg" id="preview-${template.id}"></div>
      </div>
      <div class="template-overlay">
        <button class="template-btn apply-btn" data-action="apply" data-template-id="${template.id}" title="Aplicar template">
          <span>✨ Aplicar</span>
        </button>
        <button class="template-btn customize-btn" data-action="customize" data-template-id="${template.id}" title="Personalizar com IA">
          <span>🎨 Personalizar</span>
        </button>
      </div>
    </div>
    
    <div class="template-info">
      <div class="template-header">
        <h3 class="template-name">${template.nome}</h3>
        <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-template-id="${template.id}" title="Adicionar aos favoritos">
          <span>${isFavorite ? '❤️' : '🤍'}</span>
        </button>
      </div>
      
      <p class="template-description">${template.descricao}</p>
      
      <div class="template-meta">
        <div class="template-stats">
          <span class="popularity">⭐ ${template.popularidade} usos</span>
        </div>
        <div class="template-tags">
          ${template.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      
      <div class="template-actions">
        <button class="action-btn download-btn" data-action="download" data-template-id="${template.id}">
          📥 Download
        </button>
        <button class="action-btn share-btn" data-action="share" data-template-id="${template.id}">
          🔗 Compartilhar
        </button>
      </div>
    </div>
  `;

	try {
		applyTemplatePreview(template);
	} catch (error) {
		console.error('❌ Erro ao aplicar preview do template:', template.id, error);
	}

	console.log('✅ Card criado para template:', template.id);
	return card;
}

function applyTemplatePreview(template) {
	console.log('🎨 Aplicando preview para template:', template.id);

	const previewElement = document.getElementById(`preview-${template.id}`);
	if (!previewElement) {
		console.error('❌ Elemento de preview não encontrado:', `preview-${template.id}`);
		return;
	}

	try {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = template.html;

		if (tempDiv.firstChild) {
			let previewCSS = template.css.replace(/position:\s*fixed/g, 'position: absolute');
			tempDiv.firstChild.style.cssText = previewCSS;

			const previewStyles = `
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border-radius: 8px !important;
        overflow: hidden !important;
      `;

			tempDiv.firstChild.style.cssText += previewStyles;
			previewElement.appendChild(tempDiv.firstChild);
			console.log('✅ Preview aplicado para template:', template.id);
		} else {
			console.error('❌ HTML inválido para template:', template.id);
		}
	} catch (error) {
		console.error('❌ Erro ao aplicar preview:', template.id, error);
	}
}

function setupGalleryEvents() {
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('filter-btn')) {
			document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
			e.target.classList.add('active');
			currentFilter = e.target.dataset.filter;
			renderTemplates(document.getElementById('template-search').value);
		}
	});

	const searchInput = document.getElementById('template-search');
	let searchTimeout;
	searchInput.addEventListener('input', (e) => {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			renderTemplates(e.target.value);
		}, 300);
	});

	document.addEventListener('click', (e) => {
		const btn = e.target.closest('button[data-action]');
		if (!btn) return;

		const templateId = btn.dataset.templateId;
		const action = btn.dataset.action;

		if (!templateId || !action) return;

		const template = findTemplateById(templateId);
		if (!template) return;

		switch (action) {
			case 'apply':
				applyTemplate(template);
				break;
			case 'customize':
				customizeTemplate(template);
				break;
			case 'download':
				downloadTemplate(template);
				break;
			case 'share':
				shareTemplate(template);
				break;
		}
	});

	document.addEventListener('click', (e) => {
		if (e.target.closest('.favorite-btn')) {
			const btn = e.target.closest('.favorite-btn');
			toggleFavorite(btn.dataset.templateId);
		}
	});
}

function findTemplateById(id) {
	for (const category of Object.values(templates)) {
		const template = category.find(t => t.id === id);
		if (template) return template;
	}
	return null;
}

function applyTemplate(template) {
	console.log(`🎨 Aplicando template "${template.nome}"...`);

	const existingStyle = document.getElementById("dynamic-background");
	if (existingStyle) {
		existingStyle.remove();
	}

	const existingContainer = document.getElementById("dynamic-background-container");
	if (existingContainer) {
		existingContainer.remove();
	}

	document.body.classList.add('dynamic-background-active');

	let backgroundContainer = document.createElement("div");
	backgroundContainer.id = "dynamic-background-container";
	backgroundContainer.className = "dynamic-background-container";
	document.body.insertBefore(backgroundContainer, document.body.firstChild);

	backgroundContainer.innerHTML = template.html;

	const styleElement = document.createElement("style");
	styleElement.id = "dynamic-background";
	
	let modifiedCSS = template.css;
	
	// Garantir z-index baixo
	modifiedCSS = modifiedCSS.replace(/z-index\s*:\s*-?\d+/g, 'z-index: -999');
	
	// Adicionar regras de isolamento
	modifiedCSS += `
		#dynamic-background-container,
		#dynamic-background-container * {
			pointer-events: none !important;
			z-index: -999 !important;
		}
		
		/* Garantir que o preview fique contido */
		.preview-container > * {
			position: absolute !important;
			top: 0 !important;
			left: 0 !important;
			width: 100% !important;
			height: 100% !important;
		}
	`;
	
	styleElement.textContent = modifiedCSS;
	document.head.appendChild(styleElement);

	document.getElementById("html-code").textContent = template.html;
	document.getElementById("css-code").textContent = template.css;

	const preview = document.getElementById("preview-section");
	
	// Limpar preview anterior
	preview.innerHTML = '';
	
	// Criar wrapper para o preview
	const previewWrapper = document.createElement('div');
	previewWrapper.className = 'preview-wrapper';
	previewWrapper.innerHTML = `
		<h3 class="preview-title">👁️ Preview do Background</h3>
		<div class="preview-container">
			${template.html}
		</div>
	`;
	
	preview.appendChild(previewWrapper);
	preview.classList.add("preview-card--visible");

	addRemoveBackgroundButton();

	template.popularidade++;

	console.log(`✅ Template "${template.nome}" aplicado com sucesso!`);
}

function customizeTemplate(template) {
	const textArea = document.getElementById("Description");
	textArea.value = `Baseado no template "${template.nome}": ${template.descricao}. Personalize com: `;
	textArea.focus();
	textArea.scrollIntoView({ behavior: 'smooth', block: 'center' });

	console.log(`🎨 Preparando personalização do template "${template.nome}"`);
}

function downloadTemplate(template) {
	const content = `/* Template: ${template.nome} */
/* Descrição: ${template.descricao} */
/* Categoria: ${template.categoria} */

/* HTML */
${template.html}

/* CSS */
${template.css}`;

	const blob = new Blob([content], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = `${template.id}-template.txt`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);

	console.log(`📥 Template "${template.nome}" baixado!`);
}

function shareTemplate(template) {
	const shareUrl = `${window.location.origin}${window.location.pathname}?template=${template.id}`;

	if (navigator.share) {
		navigator.share({
			title: `Template: ${template.nome}`,
			text: template.descricao,
			url: shareUrl
		});
	} else {
		navigator.clipboard.writeText(shareUrl).then(() => {
			alert('Link do template copiado para a área de transferência!');
		});
	}
}

function toggleFavorite(templateId) {
	const index = favorites.indexOf(templateId);
	if (index > -1) {
		favorites.splice(index, 1);
	} else {
		favorites.push(templateId);
	}

	localStorage.setItem('templateFavorites', JSON.stringify(favorites));

	const favoriteBtn = document.querySelector(`[data-template-id="${templateId}"].favorite-btn`);
	if (favoriteBtn) {
		const isFavorite = favorites.includes(templateId);
		favoriteBtn.classList.toggle('favorited', isFavorite);
		favoriteBtn.querySelector('span').textContent = isFavorite ? '❤️' : '🤍';
	}
}

function loadTemplateFromUrl() {
	const urlParams = new URLSearchParams(window.location.search);
	const templateId = urlParams.get('template');

	if (templateId) {
		const template = findTemplateById(templateId);
		if (template) {
			setTimeout(() => {
				applyTemplate(template);
				const templateCard = document.querySelector(`[data-template-id="${templateId}"]`);
				if (templateCard) {
					templateCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}, 500);
		}
	}
}

// ===== CÓDIGO ORIGINAL (GERADOR IA) =====

function setLoading(isLoading) {
	const btnText = document.getElementById("bnt-text");

	if (isLoading) {
		btnText.innerHTML = "Gerando Background...";
	} else {
		btnText.innerHTML = "Gerar Background Mágico";
	}
}

function copyToClipboard(text, element) {
	navigator.clipboard.writeText(text).then(function () {
		const originalText = element.textContent;
		element.style.background = '#10b981';
		element.style.color = '#ffffff';
		element.textContent = '✅ Copiado!';

		setTimeout(() => {
			element.style.background = '';
			element.style.color = '';
			element.textContent = originalText;
		}, 2000);

		console.log('✅ Código copiado para a área de transferência!');
	}).catch(function (err) {
		console.error('❌ Erro ao copiar: ', err);
		alert('Erro ao copiar o código. Tente selecionar e copiar manualmente.');
	});
}

function addCopyFunctionality() {
	const htmlCode = document.getElementById("html-code");
	const cssCode = document.getElementById("css-code");

	htmlCode.style.cursor = 'pointer';
	cssCode.style.cursor = 'pointer';
	htmlCode.title = 'Clique para copiar o HTML';
	cssCode.title = 'Clique para copiar o CSS';

	htmlCode.addEventListener('click', function () {
		const htmlText = htmlCode.textContent;
		if (htmlText && htmlText !== '<!-- HTML gerado aparecerá aqui -->' && !htmlText.startsWith('Erro:')) {
			copyToClipboard(htmlText, htmlCode);
		}
	});

	cssCode.addEventListener('click', function () {
		const cssText = cssCode.textContent;
		if (cssText && cssText !== '/* CSS gerado aparecerá aqui */' && !cssText.startsWith('Erro:')) {
			copyToClipboard(cssText, cssCode);
		}
	});
}

function addRemoveBackgroundButton() {
	const existingButton = document.getElementById("remove-background-btn");
	if (existingButton) {
		return;
	}

	const removeBtn = document.createElement("button");
	removeBtn.id = "remove-background-btn";
	removeBtn.className = "bnt-magic";
	removeBtn.style.marginTop = "16px";
	removeBtn.style.background = "linear-gradient(90deg, #dc2626, #ef4444, #f87171)";
	removeBtn.innerHTML = "🗑️ Remover Background";

	removeBtn.addEventListener("click", function () {
		const dynamicStyle = document.getElementById("dynamic-background");
		if (dynamicStyle) {
			dynamicStyle.remove();
		}

		const backgroundContainer = document.getElementById("dynamic-background-container");
		if (backgroundContainer) {
			backgroundContainer.remove();
		}

		document.body.classList.remove('dynamic-background-active');

		const preview = document.getElementById("preview-section");
		preview.innerHTML = "";
		preview.classList.remove("preview-card--visible");

		document.getElementById("html-code").textContent = "<!-- HTML gerado aparecerá aqui -->";
		document.getElementById("css-code").textContent = "/* CSS gerado aparecerá aqui */";

		removeBtn.remove();

		console.log("✅ Background removido e original restaurado!");
	});

	const generateBtn = document.getElementById("generate-bnt");
	generateBtn.parentNode.appendChild(removeBtn);
}

document.addEventListener("DOMContentLoaded", function () {
	console.log('🚀 DOM carregado, inicializando aplicação...');

	const generateBtn = document.getElementById("generate-bnt");
	const textArea = document.getElementById("Description");
	const htmlCode = document.getElementById("html-code");
	const cssCode = document.getElementById("css-code");
	const preview = document.getElementById("preview-section");

	console.log('🔍 Elementos encontrados:', {
		generateBtn: !!generateBtn,
		textArea: !!textArea,
		htmlCode: !!htmlCode,
		cssCode: !!cssCode,
		preview: !!preview
	});

	addCopyFunctionality();
	initializeTemplates();
	loadTemplateFromUrl();

	generateBtn.addEventListener("click", async function (event) {
		event.preventDefault();

		const description = textArea.value.trim();

		if (!description) {
			alert("Por favor, descreva o background que você deseja!");
			return;
		}

		console.log("Descrição enviada:", description);

		setLoading(true);

		try {
			const response = await fetch("https://emanoelbytes.app.n8n.cloud/webhook/Gerador-Background", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ description }),
			});

			if (!response.ok) {
				throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
			}

			const data = await response.json();
			console.log("Resposta da API:", data);

			let backgroundData;
			try {
				backgroundData = JSON.parse(data.output);
				console.log("Dados do background:", backgroundData);
			} catch (parseError) {
				console.error("Erro ao fazer parse da resposta:", parseError);
				throw new Error("Formato de resposta inválido do servidor");
			}

			if (backgroundData.code && backgroundData.style) {
				const existingStyle = document.getElementById("dynamic-background");
				if (existingStyle) {
					existingStyle.remove();
				}

				const existingContainer = document.getElementById("dynamic-background-container");
				if (existingContainer) {
					existingContainer.remove();
				}

				document.body.classList.add('dynamic-background-active');

				let backgroundContainer = document.createElement("div");
				backgroundContainer.id = "dynamic-background-container";
				backgroundContainer.className = "dynamic-background-container";
				document.body.insertBefore(backgroundContainer, document.body.firstChild);

				backgroundContainer.innerHTML = backgroundData.preview || backgroundData.code;

				// Limpar e criar preview na seção de preview
				preview.innerHTML = '';
				
				const previewWrapper = document.createElement('div');
				previewWrapper.className = 'preview-wrapper';
				previewWrapper.innerHTML = `
					<h3 class="preview-title">👁️ Preview do Background</h3>
					<div class="preview-container">
						${backgroundData.preview || backgroundData.code}
					</div>
				`;
				
				preview.appendChild(previewWrapper);
				preview.classList.add("preview-card--visible");

				const styleElement = document.createElement("style");
				styleElement.id = "dynamic-background";

				let modifiedCSS = backgroundData.style;
				modifiedCSS = modifiedCSS.replace(/body\s*\{[^}]*\}/g, '');
				modifiedCSS = modifiedCSS.replace(/position\s*:\s*fixed/g, 'position: absolute');
				modifiedCSS = modifiedCSS.replace(/z-index\s*:\s*-?\d+/g, 'z-index: -999');

				modifiedCSS += `
					#dynamic-background-container {
						position: fixed !important;
						top: 0 !important;
						left: 0 !important;
						width: 100% !important;
						height: 100% !important;
						z-index: -999 !important;
						pointer-events: none !important;
					}
					
					#dynamic-background-container * {
						z-index: -999 !important;
						pointer-events: none !important;
					}
				`;

				styleElement.textContent = modifiedCSS;
				document.head.appendChild(styleElement);

				htmlCode.textContent = backgroundData.code;
				cssCode.textContent = backgroundData.style;

				console.log("✅ Background aplicado com sucesso!");

				addRemoveBackgroundButton();
			} else {
				throw new Error("Resposta da API não contém código ou estilo válidos");
			}

		} catch (error) {
			console.error("Erro ao gerar o fundo:", error);

			let errorMessage = "Erro desconhecido";
			if (error.message.includes("Failed to fetch")) {
				errorMessage = "Erro de conectividade. Verifique sua internet ou se o webhook n8n está ativo.";
			} else if (error.message.includes("HTTP")) {
				errorMessage = `Erro do servidor: ${error.message}`;
			} else {
				errorMessage = error.message;
			}

			htmlCode.textContent = `Erro: ${errorMessage}`;
			cssCode.textContent = `Erro: ${errorMessage}`;
			preview.innerHTML = `<p style="color: #f43f5e; text-align: center;">${errorMessage}</p>`;
			preview.classList.add("preview-card--visible");
		} finally {
			setLoading(false);
		}
	});
});