# $FreeBSD$

PORTNAME=	vtop
DISTVERSION=	0.1.8
CATEGORIES=	sysutils

MAINTAINER=	genneko217@gmail.com
COMMENT=	Free and open source activity monitor for the command line

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		localbase:ldflags node:12,build

USE_GITHUB=	yes
GH_ACCOUNT=	MrRio

SUB_FILES=	${PORTNAME}${PKGNAMESUFFIX}

USE_NODE=	npm prefetch extract prebuild

PREFETCH_TIMESTAMP=	1584179315

pre-build:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ${NPM_CMD} install --production

do-install:
	${INSTALL_SCRIPT} ${WRKDIR}/${PORTNAME} ${STAGEDIR}${PREFIX}/bin
	${MKDIR} ${STAGEDIR}${DATADIR}
	cd ${WRKSRC} && \
		${COPYTREE_SHARE} . ${STAGEDIR}${DATADIR}

.include <bsd.port.mk>
