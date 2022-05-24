import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bg';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;