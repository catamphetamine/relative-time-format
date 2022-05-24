import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-ST';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;