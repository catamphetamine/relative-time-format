import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-TL';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;