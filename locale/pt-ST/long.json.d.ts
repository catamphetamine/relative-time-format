import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-ST';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;