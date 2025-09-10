import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'xnr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;