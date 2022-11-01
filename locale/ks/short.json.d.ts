import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ks';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;