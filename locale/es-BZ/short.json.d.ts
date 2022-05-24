import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-BZ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;