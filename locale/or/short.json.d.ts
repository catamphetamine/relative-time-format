import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'or';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;