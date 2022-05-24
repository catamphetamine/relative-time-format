import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kk';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;