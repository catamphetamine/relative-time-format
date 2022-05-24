import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-ST';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;